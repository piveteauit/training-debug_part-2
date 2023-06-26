import { Link } from "react-router-dom";
import { AddProduct, AddToCart } from "../../shared";

export function ProductLightItem({id, title, price, quantity}) {
    const productLink = `/products/${id}`;

    return (
        <div key={`ProductLightItem-${id}`} className="wcs-product-item-wrapper light">
            <div className="wcs-product-item-title light">
                <Link to={productLink}>
                    { title }
                </Link>
            </div>

            <div className="wcs-product-item-footer light">
                <div className="wcs-product-item-price light">
                    <span className="wcs-product-item-price-amount light">
                        { (price * quantity).toFixed(2) }
                    </span>
                    <span className="wcs-product-item-price-cur light">
                        €
                    </span>
                </div>

                <div>
                    <AddProduct product_id={id} light/>
                </div>
            </div>
        </div>
    )
}