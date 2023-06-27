import { useEffect, useState } from "react";
import { useUser } from "../../contexts"
import { httpService } from "../../services";
import { UserOrderComplete, UserOrderPaid } from "../../components";

/**
 * 
 * @date 27/06/2023 - 13:18:44
 *
 * @export
 * @returns {*}
 */
export function UserOrderHistory() {
    const {user} = useUser();
    const [history, setHistory] = useState([]);

    useEffect(() => {
        httpService.getAll(`/users/${user.id}/orders`)
            .then(setHistory)
            .catch(console.error);
    }, [])
    
    const currentOrders = history.filter((a) => a.status === "PAID" );
    const archivedOrders = history.filter((a) => a.status === "COMPLETE" );
    
    const getTotalOrdersPrice = (orders) => orders.reduce((acc, ord) => acc + ord.price, 0).toFixed(2);
    return (
        <div className="wcs-orders-wrapper">
            <h2 style={{textAlign: "center"}}>
                Total: {getTotalOrdersPrice(history)} €
            </h2>
            <div>
                <h3> Commandes en cours: </h3>
                { currentOrders.map(UserOrderPaid) }
                <hr />
            </div>
            <div>
                <h3> Commandes passées: </h3>
                { archivedOrders.map(UserOrderComplete) }
                <hr />
            </div>
          
        </div>
    )
}