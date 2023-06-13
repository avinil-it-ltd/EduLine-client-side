// import React from 'react';

import { Link, Outlet } from "react-router-dom";
// import Navbar from "../Shared/Navbar";

const Dashboard = () => {
    // const navigate = useNavigate();

    // const backToHome = () => {
    //     navigate('/');
    // }

    return (
        <div className="container mx-auto flex  md:flex-row flex-col items-center">

            <div className="hidden px-3 py-4 w-52   lg:block shadow-lg">
                <ul>
                    {/* student access these routes */}
                    <li> <Link className="btn my-1 w-full " to="/dashboard/mySelectedClasses">My Selected Classes</Link></li>
                    <li> <Link className="btn my-1 w-full " to="/dashboard/myEnrolledCourse">My Enrolled Course</Link></li>
                    <li> <Link className="btn my-1  w-full" to="/dashboard/studentPayment">Payment</Link></li>
                    {/* Instructor access these routes */}
                    <li> <Link className="btn my-1  w-full" to="/dashboard/addClasses">Add Classes</Link></li>
                    <li> <Link className="btn my-1  w-full" to="/dashboard/myClasses">My Classes</Link></li>
                    <li> <Link className="btn my-1  w-full" to="/dashboard/totalEnrolledStudent">Total Enrolled Student</Link></li>
                    <li> <Link className="btn my-1  w-full" to="/dashboard/feedback">Feedback</Link></li>
                    {/* Admin access these routes */}
                    <li> <Link className="btn my-1  w-full" to="/dashboard/manageClasses">Manage Classes</Link></li>
                    <li> <Link className="btn my-1  w-full" to="/dashboard/manageUsers">Manage Users</Link></li>

                </ul>


            </div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center pt-10">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    {/* <label htmlFor="my-drawer-2" className="drawer-overlay"></label> */}
                    <ul className="menu p-4 w-80 bg-slate-800 text-white text-lg">
                        {/* profile pic  */}
                        <div className="avatar mx-auto online my-5">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img alt="" />
                            </div>
                        </div>

                        {/* student access content here */}
                        <li> <Link className="btn my-1 w-full " to="/dashboard/mySelectedClasses">My Selected Classes</Link></li>
                        <li> <Link className="btn my-1 w-full " to="/dashboard/myEnrolledCourse">My Enrolled Course</Link></li>
                        <li> <Link className="btn my-1  w-full" to="/dashboard/studentPayment">Payment</Link></li>
                        <li> <Link className="btn my-1  w-full" to="/dashboard/addClasses">Add Classes</Link></li>

                    </ul>
                </div>
            </div>
        </div>
        // <div className="bg-slate-800 text-white">


        //     <div className="container mx-auto flex px-5  md:flex-row flex-col items-center">
        //         <div className="drawer drawer-mobile">
        //             <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        //             <div className="drawer-content flex flex-col items-center pt-10">
        //                 <Outlet></Outlet>
        //                 <h1>hello hi </h1>


        //             </div>
        //             <div className="drawer-side  ">

        //                 <ul className="menu p-4 w-80 bg-slate-800 text-white text-lg">

        //                     <li><Link to="/dashboard/mySelectedClasses">My Selected Classes</Link></li>
        //                     <li><Link to="/dashboard/mySelectedClasses">My Selected Classes</Link></li>
        //                     <li><Link to="/dashboard/mySelectedClasses">My Selected Classes</Link></li>
        //                     <li><Link to="/dashboard/mySelectedClasses">My Selected Classes</Link></li>
        //                     <li><Link to="/dashboard/mySelectedClasses">My Selected Classes</Link></li>
        //                 </ul>
        //             </div>
        //         </div>


        //     </div>
        // </div>
    );
};
export default Dashboard;