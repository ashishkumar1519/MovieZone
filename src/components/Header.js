import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../store/userSlice'
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/images/logo.svg'
import { signOut } from 'firebase/auth';
import { avatar_url, SUPPORTED_LANGUAGES } from '../utils/constants'
import { toggleGptSearchView} from '../store/GptSlice'
import { changeLanguage } from '../store/configSlice'
function Header({position}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const config = useSelector(store => store.config);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            const { uid, email, displayName } = user;
            dispatch(addUser({ uid, email, displayName }));
            // Navigate only if not already on browse page
            if (window.location.pathname === '/') {
                navigate('/browse');
            }
        } else {
            dispatch(removeUser());
            navigate('/');
        }
    });

    return () => unsubscribe();
}, [dispatch, navigate]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest('.dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownOpen]);

  const handleSignOut = () => {
    setIsDropdownOpen(false); // Close dropdown first
    signOut(auth).then(() => {
 
    }).catch((error) => {
      console.error('Sign out error:', error);
    });
  };

  const handleSignIn = () => {
    navigate('/');
  };

  const handleGptSerach =()=>{
    dispatch(toggleGptSearchView());
  }

  const handleLangChange = (e)=>{
    const selected = e.target.value;
    dispatch((changeLanguage(selected)));
    console.log(config.lang)
  }

  return (
    <div className={'w-full mx-auto flex justify-between items-center p-4 z-[100] bg-gradient-to-b from-black/60 to-transparent '+ (user ? position : '')}>
      
      <img src={Logo} alt="Logo" width={248} height={148} />

      <div className='flex items-center gap-4'>
        {user ? (
          // When user is LOGGED IN - Show user avatar dropdown
         <div className='relative flex items-center gap-4'>
         
         {/* Language Dropdown */}
      { showGptSearch &&  <select className='bg-gray-900 text-white px-3 py-2 rounded-md border border-gray-700 hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer text-sm' onChange={ handleLangChange}>
           {SUPPORTED_LANGUAGES.map((lang) => (
             <option key={lang.identifier} value={lang.identifier}>
               {lang.name}
             </option>
           ))}
         </select>}
         
         <button onClick={()=>handleGptSerach()} className='bg-purple-600 p-2 text-white rounded '>{showGptSearch ? "Home" : "GPT Search"}</button>
          <div className='relative dropdown-container'>
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className='flex p-2 rounded-lg items-center gap-2 hover:opacity-80 bg-red-600 transition-opacity'
            >
              <img 
                src={avatar_url} 
                alt="User Avatar" 
                className='w-8 rounded-full cursor-pointer' 
              />
              <svg 
                className={`w-4 h-4 text-white transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className='absolute right-0 mt-2 w35 bg-[rgba(22,22,22,0.7)] backdrop-blur-sm border border-gray-700 rounded-lg shadow-lg z-50'>
                <div className='p-2 border-b border-gray-700'>
                  <div className='text-white font-semibold text-sm'>
                    {user.displayName || 'User'}
                  </div>
                  <div className='text-gray-400 text-sm'>
                    {user.email}
                  </div>
                </div>
                
                <div className='p-2'>
                  <button 
                    onClick={handleSignOut}
                    className='w-full text-left px-2 text-white hover:bg-gray-800 rounded transition-colors text-sm'
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
         </div>
        ) : (
          // When user is NOT LOGGED IN - Show Sign In button
          <button 
            onClick={handleSignIn}
            className='bg-red-600 px-4 py-2 rounded text-white font-semibold hover:bg-red-700 transition-colors'
          >
            Sign In
          </button>
        )}
      </div>

    </div>
  )
}

export default Header
