import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";


const Main = () => {
    const location = useLocation();
    const withoutHeaderAndFooter = location.pathname.includes('login') || location.pathname.includes('signup');
    return (
        <div>
            {withoutHeaderAndFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {withoutHeaderAndFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;