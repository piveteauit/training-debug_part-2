import { useCart } from "../contexts"

/**
 * 
 * @date 26/06/2023 - 20:28:24
 *
 * @export
 * @param {{ product_id: any; }} {product_id}
 * @returns {*}
 */
export function AddToCart({product_id}) {
    const {cart, addToCart} = useCart();
    const currentProduct = cart?.find(c => c.product_id === product_id);

    return (
        <div className="wcs-add-to-cart-wrapper">
            { (currentProduct) && (
                <span className="wcs-add-to-cart-counter">
                    { currentProduct?.quantity || 1 }
                </span>
            )}
            <button onClick={() => addToCart(product_id)}>
                Ajouter au panier
            </button>
        </div>
    )
}