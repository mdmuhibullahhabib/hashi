import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import DoctorProfile from '../Pages/DoctorProfile';
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SIgnUp';
import Appointment from '../Pages/Appointment';


const Router = createBrowserRouter ([
    {
        path : "/",
        element : <Main></Main>,
        children : [
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path : "/doctor-profile",
                element : <DoctorProfile></DoctorProfile>
            },
            {
                path : "/signup",
                element : <SignUp></SignUp>
            },
            {
                path : "/signin",
                element : <SignIn></SignIn>
            },
            {
                path : "/appointment",
                element : <Appointment></Appointment>
            },
        ]
    }

])

export default Router;