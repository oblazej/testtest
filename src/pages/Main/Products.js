import React from 'react';
import Product from './Product';

export default function Products() {

    const products = ["product1", "product2", "product3", "product4", "product5", "product6", "product7", "product8"]

    return (
        <div className="bg-beige-light flex flex-wrap">
            {products.map(item => <Product name={item} key={item} order={parseInt(item.slice(-1))}/>)}
        </div>
    );
}
