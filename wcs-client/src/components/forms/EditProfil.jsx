import { useState } from "react";
import { WCSInput } from "../../shared";
import { _onChange, _onSubmit } from "../../utils";
import { useUser } from "../../contexts";
import { httpService } from "../../services";

/**
 * 
 * @date 26/06/2023 - 20:25:11
 *
 * @export
 * @returns {*}
 */
export function EditProfil() {
    const {user: {id, username, email, password}, setUser} = useUser();
    const [values, setValues] = useState({username, email, password});
    
    const onChange = _onChange(values, setValues);
    const onSubmitCB = (user) => {
        httpService.update(`users/${id}`, values)
            .then((result) => {
                if (!result || result?.error) return alert(`Something bad happend ! \n\n ${result.error}`)

                setUser(user)
            });
    }

    return (
        <form onSubmit={_onSubmit(values, onSubmitCB)} action={`/api/users/${id}`} method="put">

            <WCSInput value={values.username} label="Username" id={"login-username"} type="text" name="login-username" onChange={onChange} />
            <WCSInput value={values.email} label="Email" id={"login-email"} type="email" name="login-email" onChange={onChange} />
            <WCSInput value={values.password || ""} label="Password" id={"login-password"} type="password" name="login-password" onChange={onChange} />

            <button type="submit">Valider</button>
        </form>
    )
}