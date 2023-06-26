import { useEffect, useState } from "react";
import { httpService } from "../../services";
import { useCart, useProduct, useUser } from "../../contexts";
import { ProductLightItem } from "../products";

/**
 * 
 * @date 26/06/2023 - 20:25:54
 *
 * @export
 * @returns {*}
 */
export function Cart() {
    const {setCart, getInCartProducts, cart} = useCart();
    const {user} = useUser();
    const [products] = useProduct();
    const [inCartProducts, setInCartProducts] = useState([]);

    useEffect(() => {
        if (products?.length) setInCartProducts(getInCartProducts(products));
    }, [cart]);

    useEffect(() => {
        httpService.getAll(`users/${user?.id}/carts`)
            .then(setCart)
            .catch(console.error)
    }, [products])


    const totalPrice = inCartProducts.reduce((totalPrice, {price, quantity}) => (totalPrice + (Number(price) * Number(quantity))), 0).toFixed(2);

    return (
        <aside className="wcs-side">

        <div className="wcs-cart">
            <div className="wcs-cart-title">
                Votre panier
            </div>
            <div>
                { inCartProducts.map(ProductLightItem) }
            </div>
            <div className="wcs-cart-footer">
               <div className="wcs-cart-total">
                    <span>
                        Total: 
                    </span>
                    <span>
                        {`${totalPrice} €`}
                    </span>
               </div>
                <div className="wcs-cart-checkout">
                    <button onClick={console.log}>
                        Checkout
                    </button>
                </div>
            </div>
        </div>
        </aside>
    );
}