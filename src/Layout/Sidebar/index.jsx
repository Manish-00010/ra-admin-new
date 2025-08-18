import Scrollbar from "simplebar-react";
import {Link} from "react-router-dom";
import MenuItem from "./MenuItem";
import { sidebarConfig } from "../../Data/Sidebar/sidebar";

const Sidebar = ({sidebarOpen, setIsSidebarOpen}) => {
    return (
        <nav className={`vertical-sidebar ${!sidebarOpen ? "semi-nav" : ""}`}>
            <div className="app-logo">
                <Link className="logo d-inline-block" to="/Amazon/Dashboard">
                    {/* <img src="/assets/images/logo/ra-white.png" alt="#" className="light-logo"/> */}
                    <img src="/assets/images/logo/1.png" alt="#" className="dark-logo one"/>
                    <img src="/assets/images/logo/logo2.png" alt="#" className="dark-logo two"/>
                </Link>
                <span
                    className="bg-light-light toggle-semi-nav"
                    onClick={() => {
                        setIsSidebarOpen(!sidebarOpen)
                    }}
                >
                    <i className="ti ti-chevrons-right f-s-20"></i>
                </span>
            </div>
            <Scrollbar className="app-nav simplebar-scrollable-x" id="app-simple-bar">
                <ul className="main-nav p-0 mt-2">
                    {sidebarConfig.map((config, index) => (
                        <MenuItem key={index} {...config} />
                    ))}
                </ul>
            </Scrollbar>

        </nav>
    );
};

export default Sidebar;