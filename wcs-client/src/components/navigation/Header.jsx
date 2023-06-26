import { NavLink, useNavigate } from "react-router-dom";
import { useUser } from "../../contexts";

/**
 * 
 * @date 26/06/2023 - 20:26:24
 *
 * @export
 * @returns {*}
 */
export function Header() {
    const {user, setUser} = useUser();
    const navigate = useNavigate();

    const onLogout = () => {
        setUser("");
        navigate("/");
    }
    
    return (
        <header className="wcs-header">
            <div className="wcs-header-left">
                <NavLink className={"wcs-header-navlink"} to={"/"}> Home </NavLink>            
                <NavLink className={"wcs-header-navlink"} to={"/shop"}> Shop </NavLink>
            </div>

            

            { (user) && (
                <div className="wcs-header-right">
                    <NavLink className={"wcs-header-navlink"} to={"/profil"}> Profil </NavLink>
                    <NavLink className={"wcs-header-navlink"} onClick={onLogout}> Logout </NavLink>
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