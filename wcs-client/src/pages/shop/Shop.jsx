import { useEffect, useState } from "react";
import { httpService } from "../../services";
import { ProductItem } from "../../components/products";
import { useProduct } from "../../contexts";

export function Shop () {
    const [products, setProducts] = useProduct([]);
    
    useEffect(() => {
        httpService.getAll("products")
            .then(setProducts)
            .catch((err) => console.error(err))
    }, []);

    return (
        <div className="wcs-products-list">
            { products.map(ProductItem) }
        </div>
    );
}