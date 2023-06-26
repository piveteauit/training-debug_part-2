import { useState } from "react";
import { Forms } from "../../components";

export function Home() {
    const [currentForm, setCurrentForm] = useState("Login");
    
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