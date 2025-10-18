import { useRef, useState } from 'react'
import Header from '../components/Header'
import { checkValidateData } from '../utils/validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from 'react-redux';
import { addUser } from '../store/userSlice';
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMessage, setErrMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Validation and form submission logic here
  const message = checkValidateData(email.current.value, password.current.value);
  setErrMessage(message.message);
  if(message.message) return;

  if(!isSignIn){
    // Sign Up Logic
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user,{displayName: name.current.value })
    .then(() => {
      if (user) {
            const { uid, email, displayName } = auth.currentUser;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      }
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrMessage(errorMessage+ " " +errorCode);
  });
  }else{
    // Sign In Logic
    // For example, using signInWithEmailAndPassword method
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
     
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.navigate;
        setErrMessage(errorMessage + " " + errorCode);
      });
  }
}
  return (
    <div className='w-[70%] h-full mx-auto '>
      <Header />
       <img className='  z-[-1] fixed inset-0 w-full h-full  object-cover bg-center' src="https://assets.nflxext.com/ffe/siteui/vlv3/3e4bd046-85a3-40e1-842d-fa11cec84349/web/IN-en-20250818-TRIFECTA-perspective_4bd1b66d-bbb6-4bc6-ba8f-ecbba53a1278_large.jpg" alt="" />

       <form action="" className='relative z-10 max-w-md mx-auto mt-10 p-8 bg-black/75 rounded'>
         <h1 className="text-white text-4xl font-bold mb-8">{isSignIn ? "Sign In" : "Sign Up"}</h1>
         
         <div className="mb-4">
           <input 
             type="email" 
             placeholder="Email or mobile number" 
             className="block w-full p-3 bg-[rgba(22,22,22,0.7)] text-white border border-gray-600 rounded focus:outline-none focus:border-white" 
             ref={email}
           />
         </div>

           {
          !isSignIn &&(
            <div className="mb-4">
           <input 
             type="text" 
             placeholder="Name" 
             className="block w-full p-3 bg-[rgba(22,22,22,0.7)] text-white border border-gray-600 rounded focus:outline-none focus:border-white" 
             ref={name}
           />
        
         </div>
          )
         }
         
         <div className="mb-4">
           <input 
             type="password" 
             placeholder="Password" 
             className="block w-full p-3 bg-[rgba(22,22,22,0.7)] text-white border border-gray-600 rounded focus:outline-none focus:border-white" 
             ref={password}
           />
         </div>

         {
          errMessage && <p className="text-red-700 text-sm my-2">: ) {errMessage}</p>
         }
         <button onClick={handleSubmit} type="submit" className="w-full p-3 bg-red-600 text-white rounded font-semibold hover:bg-red-700 mb-4">
          {isSignIn ? "Sign In" : "Sign Up"}
         </button>
         
         <div className="text-center mb-4">
           <span className="text-gray-400">OR</span>
         </div>
         
         <button type="button" className="w-full p-3 bg-[rgba(22,22,22,0.7)] text-white rounded font-semibold hover:bg-gray-700 mb-4">
           Use a sign-in code
         </button>
         
         <div className="text-center mb-4">
           <p className="text-white hover:underline">Forgot password?</p>
         </div>
         
         <div className="flex items-center mb-4">
           <input type="checkbox" id="remember" className="mr-2" />
           <label htmlFor="remember" className="text-white text-sm">Remember me</label>
         </div>
         
         <div className="text-gray-400 text-sm mb-4 flex cursor-pointer ">
           <span>New to Netflix? </span>
           <p onClick={toggleSignIn} className="text-white hover:underline ml-1 ">{isSignIn ? "Sign up now." : "Already have an account? Sign in."}</p>
         </div>
         
         <div className="text-gray-500 text-xs">
           <p className="mb-2">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
         </div>
       </form>

    </div>
  )
}

export default Login;
