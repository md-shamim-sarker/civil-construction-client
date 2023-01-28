import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {BsMoon, BsSun} from 'react-icons/bs';

const Menubar = () => {
    const [offCanvas, setOffCanvas] = useState(false);
    console.log(offCanvas);
    return (
        <>
            <div className='flex bg-slate-200 justify-between items-center px-2 lg:px-10 py-3 w-screen fixed top-0'>
                <div>
                    <h2 className='text-2xl font-extrabold'>CVL CNSTRCTN</h2>
                </div>
                <div className='hidden lg:flex gap-x-4'>
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/about"}>About</NavLink>
                    <NavLink to={"/services"}>Services</NavLink>
                    <NavLink to={"/projects"}>Projects</NavLink>
                    <NavLink to={"/contact-us"}>Contact Us</NavLink>
                    <NavLink to={"/my-project"} className="hidden">My Project</NavLink>
                    <NavLink to={"/admin-panel"} className="hidden">Admin Panel</NavLink>
                </div>
                <div className='flex gap-x-3 items-center'>
                    <label className="swap swap-rotate">
                        <input type="checkbox" />
                        <BsSun className="swap-on fill-current w-6 h-6"></BsSun>
                        <BsMoon className="swap-off fill-current w-6 h-6"></BsMoon>
                    </label>
                    <button className="hidden lg:block btn btn-primary btn-sm">Login</button>

                    <label onClick={() => setOffCanvas(true)} className="lg:hidden btn btn-circle btn-sm btn-ghost">
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                    </label>
                </div>
            </div>
            {
                offCanvas &&
                <div className='w-screen h-screen bg-slate-200 fixed right-0 top-0'>
                    <div>
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
                    </div>
                </div>
            }

        </>
    );
};

export default Menubar;