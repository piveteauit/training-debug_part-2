import { NavLink } from "react-router-dom";


/**
 * 
 * @date 26/06/2023 - 20:26:18
 *
 * @export
 * @returns {*}
 */
export function Footer() {
    return (
        <footer className="wcs-footer">
            <ul className="wcs-footer-list">
                <li>
                    <NavLink to={"/"}> Useless Link #1 </NavLink>
                </li>
                <li>
                    <NavLink to={"/"}> Useless Link #2 </NavLink>
                </li>
                <li>
                    <NavLink to={"/"}> Useless Link #3 </NavLink>
                </li>
            </ul>

            <ul className="wcs-footer-list">
                <li>
                    <NavLink to={"/"}> Useless Link #1 </NavLink>
                </li>
                <li>
                    <NavLink to={"/"}> Useless Link #2 </NavLink>
                </li>
                <li>
                    <NavLink to={"/"}> Useless Link #3 </NavLink>
                </li>
            </ul>

            <ul className="wcs-footer-list">
                <li>
                    <NavLink to={"/"}> Useless Link #1 </NavLink>
                </li>
                <li>
                    <NavLink to={"/"}> Useless Link #2 </NavLink>
                </li>
                <li>
                    <NavLink to={"/"}> Useless Link #3 </NavLink>
                </li>
            </ul>
        </footer>
    );   
}