import { NavLink } from "react-router-dom";
import { useUser } from "../../contexts";

export function Header() {
    const {user} = useUser();

    return (
        <header className="wcs-header">
            <div className="wcs-header-left">
                <NavLink className={"wcs-header-navlink"} to={"/"}> Home </NavLink>            
                <NavLink className={"wcs-header-navlink"} to={"/shop"}> Shop </NavLink>
            </div>

            

            { (user) && (
                <div className="wcs-header-right">
                    <NavLink className={"wcs-header-navlink"} to={"/cart"}> Shop </NavLink>
                    <NavLink className={"wcs-header-navlink"} to={"/profil"}> Profil </NavLink>

                    <button onClick={() => console.log('user logged out')}> Logout </button>
                </div>
            )}

            { (!user) && (
                <div className="wcs-header-right">
                    <NavLink className={"wcs-header-navlink"} to={"/login"}> Login / Register </NavLink>
                </div>
            )}

        </header>
    );
}