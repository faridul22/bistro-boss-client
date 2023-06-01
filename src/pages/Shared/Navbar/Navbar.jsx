import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";
import useCard from "../../../hooks/useCard";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cards] = useCard()
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => { console.log(error) })
    }
    const navItems = <>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/menu">Our Menu</Link>
        </li>
        <li>
            <Link to="/order/salad">Order Food</Link>
        </li>

        <li>
            <Link to="/" className="btn gap-2">
                <FaShoppingCart />
                <div className="badge badge-secondary">+{cards?.length || 0}</div>
            </Link >
        </li>
        {user ? <>
            <li>
                <Link onClick={handleLogOut} to="/">Log Out</Link>
            </li>
        </> : <>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </>}


    </>
    return (
        <>
            <div className="navbar max-w-screen-xl fixed z-10 bg-opacity-30 text-white bg-black px-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-opacity-30 text-white bg-black rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <div className="flex flex-col text-xl cursor-pointer">
                        <Link to="/">BISTRO BOSS</Link>
                        <small className="uppercase">Restaurant</small>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;