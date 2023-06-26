import httpService from "../services/httpService";

export function _onChange(state, setState) {
    return function (evt) {
        return setState({
            ...state,
            [evt.target.name]: evt.target.value,
        })
    }
}

export function _onSubmit(payload, cb = () => {}) {
    return async function (evt) {
        evt.preventDefault();
        const {method, action} = evt.target;

        console.log(method, action)

        return httpService[`_${(method || "get").toLowerCase()}`](action, payload).then(cb)
    }
}