import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Login from '../pages/Login'
import Browse from '../pages/Browse'

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/browse',
        element: <Browse />
    }
]);

function Body() {

  

    return (
        <div className='h-full w-full'>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body