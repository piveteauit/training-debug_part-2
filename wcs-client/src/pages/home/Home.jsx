import { useEffect, useState } from "react";
import { Forms } from "../../components";
import { useUser } from "../../contexts";
import { useNavigate } from "react-router-dom";

export function Home({initialForm}) {
    const [currentForm, setCurrentForm] = useState(initialForm);
    const {user} = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) navigate('/shop')
    }, [user])

    
    return (
        <div className="home">

            <h2>
                {currentForm}
            </h2>
            
            { (currentForm === "Login")
                ? <Forms.Login />
                : <Forms.Register />
            }

            <a className="form-alt" href="#" onClick={() => setCurrentForm(currentForm === "Login" ? "Register" : "Login")}>
                ou {currentForm === "Login" ? "Register" : "Login"} 
            </a> 
        </div>
    );
}