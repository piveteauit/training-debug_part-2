import { useEffect, useState } from "react";

/**
 * 
 * @date 26/06/2023 - 20:28:30
 *
 * @export
 * @param {*} props
 * @returns {*}
 */
export function WCSInput (props) {
    const [active, setActive] = useState(false);

    useEffect(() => {
        setActive(!!props.value);
    }, [props.value])

    return (
        <div className="wcs-input-wrapper">
            <input onBlur={() => setActive(!!props.value)} onFocus={() => setActive(true)} className={`wcs-input ${active && "active"}`} {...props} />
            <label className={`wcs-label ${active && "active"}`} htmlFor={props.id}> {props.label} </label>
        </div>
        
    );
}