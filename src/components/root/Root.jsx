import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";


const Root = () => {
    return (
        <> 
         <Navbar></Navbar>
         <Outlet></Outlet>
         <Footer></Footer>

        </>
    );
};

export default Root;