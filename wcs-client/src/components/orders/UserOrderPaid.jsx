export function UserOrderPaid(order) {
    return (
        <table key={`UserOrderPaid-${order.ref}`}>
            <thead>
               <tr>
                <th>Référence: </th>
                <th>Nom:</th>
                <th>Prix unitataire:</th>
                <th>Prix total:</th>
                <th>Quantité:</th>
               </tr>
            </thead>
            <tbody>
                {order.products.map((p, i) => (
                    <tr key={`UserOrderComplete.products-${i}`}>
                        <td>{order.ref}</td>
                        <td>{p.title}</td>
                        <td>{p.unit_price} €</td>
                        <td>{p.price} €</td>
                        <td>{p.quantity}</td>
                    </tr>
                ))}
            </tbody>

            <tfoot>
                <tr>
                    <td>Total:</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{order.price} €</td>
                </tr>
            </tfoot>
        </table>
    );
}