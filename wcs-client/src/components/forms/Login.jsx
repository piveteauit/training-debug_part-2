import { useState } from "react";
import { WCSInput } from "../../shared";
import { _onChange, _onSubmit } from "../../utils";
import { useUser } from "../../contexts";

export function Login() {
    const [values, setValues] = useState({email: "", password: ""});
    const {user, setUser} = useUser();
    const onChange = _onChange(values, setValues)
    const onSubmit = _onSubmit(values, setUser);

    return (
        <form onSubmit={onSubmit} method="post" action="/api/users/auth">
            <WCSInput value={values.email} label="Email" id={"login-email"} type="email" name="email" onChange={onChange} />
            <WCSInput value={values.password} label="Password" id={"login-password"} type="password" name="password" onChange={onChange} />
            <button type="submit">Valider</button>
        </form>
    )
}