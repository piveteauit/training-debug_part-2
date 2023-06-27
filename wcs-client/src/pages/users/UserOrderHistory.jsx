import { useEffect, useState } from "react";
import { useUser } from "../../contexts"
import { httpService } from "../../services";

export function UserOrderHistory() {
    const {user} = useUser();
    const [history, setHistory] = useState([]);

    useEffect(() => {
        httpService.getAll(`/users/${user.id}/orders`)
            .then(setHistory)
            .catch(console.error);
    }, [])
    
    console.log(history)
    
    return (
        <div>
            { history.map((order, i) => {
                return (
                    <span key={"UserOrderHistory-" + i}>
                        {order?.id}
                    </span>
                )
            })

            }
        </div>
    )
}