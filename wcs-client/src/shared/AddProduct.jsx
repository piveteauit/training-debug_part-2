import { useCart, useUser } from "../contexts"

/**
 * 
 * @date 26/06/2023 - 20:28:18
 *
 * @export
 * @param {{ product_id: any; light: any; }} {product_id, light}
 * @returns {*}
 */
export function AddProduct({product_id, light}) {
    const {cart, addToCart, removeToCart, saveCart} = useCart();
    const {user} = useUser();
    const currentCart = cart?.find(c => c.product_id === product_id);

    const updateProductInCart = () => {
        addToCart(product_id);
        const {quantity} = currentCart || { quantity: 1 };
        saveCart({product_id, quantity: quantity + 1}, user?.id, currentCart?.cart_id)
    }

    const onClick = (evt) => {
        const {quantity} = currentCart || { quantity: 1 };
        const newQuantity = Number(quantity) + Number(evt.target.name);

        saveCart({product_id, quantity: newQuantity}, user?.id, currentCart?.cart_id);
        
        return (evt.target.name > 0) 
            ? addToCart(product_id) 
            : removeToCart(product_id)
    };

    return (
        <div className={`wcs-add-product-wrapper ${light && "light"}`}>
            <button name="-1" onClick={onClick}> - </button>
            <span> {currentCart?.quantity || 0} </span>
            <button name="1" onClick={onClick}> + </button>
        </div>
    )
}