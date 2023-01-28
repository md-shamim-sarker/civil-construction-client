import React from 'react';
import {Outlet} from 'react-router-dom';
import Footer from '../components/Footer';
import Menubar from '../components/Menubar';

const Main = () => {
    return (
        <div>
            <Menubar></Menubar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;