import { useState } from "react";

export function WCSInput (props) {
    const [active, setActive] = useState(!!props.value);

    console.log(props)

    return (
        <div className="wcs-input-wrapper">
            <input onBlur={() => setActive(!!props.value)} onFocus={() => setActive(true)} className={`wcs-input ${active && "active"}`} {...props} />
            <label className={`wcs-label ${active && "active"}`} htmlFor={props.id}> {props.label} </label>
        </div>
        
    );
}