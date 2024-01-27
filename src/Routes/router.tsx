import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/login/Login';
import PrivateRoute from './PrivateRoutes';
import RegisterPage from '../pages/register/Register';

// ... (Your other imports and component definitions)

export const protectedRoutes = [
    {
        path: "/profile",
        element: <div>Profile Page</div>,

    },
    {
        path: "/list",
        element: <div>Profile Page</div>,

    },
    {
        path: "/request",
        element: <div>Req Page</div>,
        children: [
            {
                path: 'new',
                element: <div>New Req Page</div>,

            },
            {
                path: ':reqId',
                element: <div>Request Id </div>,

            }
        ]

    },
]


const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,

    },
    {
        path: "/login",
        element: <Login onLogin={() => { }} onGoogleLogin={() => { }} />,
    },
    {
        path: "/register",
        element: <RegisterPage />
    },
    {
        Component: PrivateRoute,
        children: protectedRoutes
    }
]);


export default router;
