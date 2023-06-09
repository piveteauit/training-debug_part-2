import { useState } from "react";
import { WCSInput } from "../../shared";

export function Login() {
    const [values, setValues] = useState({email: "", password: ""});
    const onChange = (evt) => setValues({...values, [evt.target.name]: evt.target.value})
    console.log(values)
    return (
        <form>
            <WCSInput value={values.email} label="Email" id={"login-email"} type="email" name="email" onChange={onChange} />
            <WCSInput value={values.password} label="Password" id={"login-password"} type="password" name="password" onChange={onChange} />
        </form>
    )
}