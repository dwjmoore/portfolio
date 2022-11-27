import { NavLink, Outlet } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <NavLink to="/" activeClassName="nav-link-active">
                Home
            </NavLink>

            <NavLink to="/about" activeClassName="nav-link-active">
                About
            </NavLink>

            <NavLink to="/contact" activeClassName="nav-link-active">
                Contact
            </NavLink>

            <Outlet />
        </div>
    );
}