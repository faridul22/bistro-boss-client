import { FaCalendarAlt, FaHome, FaShoppingCart, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCard from "../hooks/useCard";


const Dashboard = () => {
    const [cards] = useCard()
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
                        <li><NavLink to="/dashboard/home"><FaHome />User Home</NavLink></li>
                        <li><NavLink to="/dashboard/reservations"><FaCalendarAlt />Reservations</NavLink></li>
                        <li><NavLink to="/dashboard/history"><FaWallet />Payment History</NavLink></li>
                        <li>
                            <NavLink to="/dashboard/mycard"><FaShoppingCart /> My Card <span className="badge badge-secondary">+{cards?.length || 0}</span></NavLink>
                        </li>
                        <div className="divider"></div>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;