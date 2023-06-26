import { Link } from "react-router-dom";
import { AddProduct, AddToCart } from "../../shared";

export function ProductItem({id, title, price, image}) {
    const productLink = `/products/${id}`;

    return (
        <div key={`ProductItem-${id}`} className="wcs-product-item-wrapper">
            <div className="wcs-product-item-title">
                <Link to={productLink}>
                    { title }
                </Link>
            </div>

            <Link to={productLink}>
                <div className="wcs-product-item-image">
                    <img src={image} alt={title} />
                </div>
            </Link>

            <div className="wcs-product-item-price">
                <span className="wcs-product-item-price-amount">
                    { price }
                </span>
                <span className="wcs-product-item-price-cur">
                    €
                </span>
            </div>

            <div>
                <AddToCart product_id={id} />
            </div>
        </div>
    )
}