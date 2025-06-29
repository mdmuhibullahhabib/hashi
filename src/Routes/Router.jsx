import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import DoctorProfile from '../Pages/DoctorProfile';
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SIgnUp';
import Appointment from '../Pages/Appointment';
import About from '../Pages/About';
import Reviews from '../Pages/Reviews';
import Contact from '../Pages/Contact';
import Dashboard from '../Layouts/Dashboard';
import AddDoctor from '../Pages/Admin/AddDoctor';
import AdminDashboard from '../Pages/Admin/Dashboard';
import ManageDoctor from '../Pages/Admin/ManageDoctor';
import AllUsers from '../Pages/Admin/AllUsers';
// import Dashboard from '../Pages/Dashboard';


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
                path : "/doctor-profile/:id",
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
            {
                path : "/about",
                element : <About></About>
            },
            {
                path : "/reviews",
                element : <Reviews></Reviews>
            },
            {
                path : "/contact",
                element : <Contact></Contact>
            },
            {
                path : "/dashboard",
                element : <Dashboard></Dashboard>
            },
            {
                path : "/all-users",
                element : <AllUsers></AllUsers>
            },
            {
                path : "/manage-doctors",
                element : <ManageDoctor></ManageDoctor>
            },
            {
                path : "/add-doctor",
                element : <AddDoctor></AddDoctor>
            },
            {
                path : "/dashboard/admin-dashboard",
                element : <AdminDashboard></AdminDashboard>
            },
        ]
    }

])

export default Router;