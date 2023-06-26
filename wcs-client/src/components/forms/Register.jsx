import { useState } from "react";
import { WCSInput } from "../../shared";

export function Register() {
    const [values, setValues] = useState({username: "", email: "", password: ""});
    const onChange = (evt) => setValues({...values, [evt.target.name]: evt.target.value})
    return (
        <form>
            <WCSInput value={values.username} label="Username" id={"login-username"} type="text" name="username" onChange={onChange} />
            <WCSInput value={values.email} label="Email" id={"login-email"} type="email" name="email" onChange={onChange} />
            <WCSInput value={values.password} label="Password" id={"login-password"} type="password" name="password" onChange={onChange} />

            <button type="submit">Valider</button>
        </form>
    )
}