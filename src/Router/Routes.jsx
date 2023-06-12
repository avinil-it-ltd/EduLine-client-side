
import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Component/Pages/Home";
import Error from "../Component/Pages/Error";
import Login from "../Component/Pages/Login/Login";
import Signup from "../Component/Shared/Signup";
import Dashboard from "../Component/Dashboard/Dashboard";
import MySelectedClasses from "../Component/Dashboard/MySelectedClasses";
import MyEnrolledClasses from "../Component/Dashboard/MyEnrolledClasses";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element:<Signup></Signup>
            },

            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
                children:[
                    // {
                    //     path: '/dashboard',
                    //     element: ""
                    // },
                    {
                        path: '/dashboard/mySelectedClasses',
                        element:<MySelectedClasses></MySelectedClasses>
                    },
                    {
                        path: '/dashboard/myEnrolledCourse',
                        element:<MyEnrolledClasses></MyEnrolledClasses>
                    },
                ]
            },

        ]
    },
]);

