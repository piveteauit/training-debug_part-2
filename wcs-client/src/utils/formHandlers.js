import httpService from "../services/httpService";

/**
 * 
 * @date 26/06/2023 - 20:09:04
 *
 * @export
 * @param {*} state
 * @param {(state: any) => void} setState
 * @returns {(evt: any) => any}
 */
export function _onChange(state, setState) {    
    return function (evt) {
        return setState({
            ...state,
            [evt.target.name]: evt.target.value,
        })
    }
}

/**
 * 
 * @date 26/06/2023 - 20:10:21
 *
 * @export
 * @param {*} payload
 * @param {(result: any) => void} [cb=(result) => {}]
 * @returns {(void) => (evt: any) => any}
 */
export function _onSubmit(payload, cb = (result) => {}) {
    return async function (evt) {
        evt.preventDefault();
        const {method, action} = evt.target;

        console.log(method, action)

        return httpService[`_${(method || "get").toLowerCase()}`](action, payload).then(cb)
    }
}
