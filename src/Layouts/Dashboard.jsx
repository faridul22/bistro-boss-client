import { FaBook, FaCalendarAlt, FaHome, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCard from "../hooks/useCard";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    const [cards] = useCard();

    // TODO: load data from the server to have dynamic based on Data

    // const isAdmin = true;

    const [isAdmin] = useAdmin()

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/*  Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-[#D1A054]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80">
                        {/* Sidebar content here */}
                        {
                            isAdmin ? <>
                                <li><NavLink to="/dashboard/admin_home"><FaHome />Admin Home</NavLink></li>
                                <li><NavLink to="/dashboard/additem"><FaUtensils />Add an Item</NavLink></li>
                                <li><NavLink to="/dashboard/manageitems"><FaBook />Manage Items</NavLink></li>
                                <li><NavLink to="/dashboard/allusers"><FaUsers />All Users</NavLink></li>


                            </> : <>

                                <li><NavLink to="/dashboard/home"><FaHome />User Home</NavLink></li>
                                <li><NavLink to="/dashboard/reservations"><FaCalendarAlt />Reservations</NavLink></li>
                                <li><NavLink to="/dashboard/history"><FaWallet />Payment History</NavLink></li>
                                <li>
                                    <NavLink to="/dashboard/mycard"><FaShoppingCart /> My Card <span className="badge badge-secondary">+{cards?.length || 0}</span></NavLink>
                                </li>
                            </>
                        }

                        <div className="divider"></div>

                        <li><NavLink to="/"><FaHome />Home</NavLink></li>
                        <li><NavLink to="/menu">Our Menu</NavLink></li>
                        <li><NavLink to="/order/salad">Order Food</NavLink></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;