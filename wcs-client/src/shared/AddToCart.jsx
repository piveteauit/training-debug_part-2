import { useCart, useUser } from "../contexts"

/**
 * 
 * @date 26/06/2023 - 20:28:24
 *
 * @export
 * @param {{ product_id: any; }} {product_id}
 * @returns {*}
 */
export function AddToCart({product_id}) {
    const {cart, addToCart, saveCart} = useCart();
    const currentCart = cart?.find(c => c.product_id === product_id);
    const {user} = useUser();

    const addProductToCart = () => {
        addToCart(product_id);
        const {quantity} = currentCart || { quantity: 1 };
        saveCart({product_id, quantity: quantity + 1}, user?.id, currentCart?.cart_id)
    }

    return (
        <div className="wcs-add-to-cart-wrapper">
            { (currentCart) && (
                <span className="wcs-add-to-cart-counter">
                    { currentCart?.quantity }
                </span>
            )}
            { (currentCart?.quantity) 
                ? (
                    <span> Déjà dans le panier </span>
                )
                : (
                    <button onClick={addProductToCart}>
                        Ajouter au panier
                    </button>
                ) 
            }
        </div>
    )
}