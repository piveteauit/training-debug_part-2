import { useState } from "react";
import { WCSInput } from "../../shared";
import { _onChange, _onSubmit } from "../../utils";
import { useUser } from "../../contexts";
import { useNavigate } from 'react-router-dom';

/**
 * 
 * @date 26/06/2023 - 20:25:30
 *
 * @export
 * @returns {*}
 */
export function Register() {
    const [values, setValues] = useState({username: "", email: "", password: ""});
    const {setUser} = useUser();
    const navigate = useNavigate();
    const onChange = _onChange(values, setValues);
    const onSubmitCB = (user) => {
        if (!user || user?.error) {
            return alert(`Bad luck... \n Something wrong happend ;( \n ${user?.error}`)
        }
        
        setUser(user)
        navigate('/shop');

    };
    
    return (
        <form onSubmit={_onSubmit(values, onSubmitCB)} method="post" action="/api/users/register">
            <WCSInput value={values.username} label="Username" id={"login-username"} type="text" name="username" onChange={onChange} />
            <WCSInput value={values.email} label="Email" id={"login-email"} type="email" name="email" onChange={onChange} />
            <WCSInput value={values.password} label="Password" id={"login-password"} type="password" name="password" onChange={onChange} />

            <button type="submit">Valider</button>
        </form>
    )
}