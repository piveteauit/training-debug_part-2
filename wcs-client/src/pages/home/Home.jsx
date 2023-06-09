import { useState } from "react";
import { Forms } from "../../components";

export function Home() {
    const [currentForm, setCurrentForm] = useState("Login");
    const switchForm = () => setCurrentForm(currentForm === "Login" ? "Register" : "Login");
    
    return (
        <main>
            <h2> {currentForm} </h2>

            {Forms[currentForm]()}

            <button onClick={switchForm}>
                { currentForm === "Login"
                    ? "Pas encore de compte, inscrivez vous"
                    : "Déjà inscrit ? Connectez vous"
                }
            </button>
        </main>
    );
}