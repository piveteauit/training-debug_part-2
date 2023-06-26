import { useCart } from "../contexts"

export function AddProduct({product_id, light}) {
    const {cart, addToCart, removeToCart} = useCart();
    const currentProduct = cart?.find(c => c.product_id === product_id);

    const onClick = (evt) => (evt.target.name > 0) ? addToCart(product_id) : removeToCart(product_id);

    return (
        <div className={`wcs-add-product-wrapper ${light && "light"}`}>
            <button name="-1" onClick={onClick}> - </button>
            <span> {currentProduct?.quantity || 0} </span>
            <button name="1" onClick={onClick}> + </button>
        </div>
    )
}