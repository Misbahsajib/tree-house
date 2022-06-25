import React from 'react';
import './Product.css'

const Product = (props) => {
    const{id,name,category,price,img,stock}=props.product;
    console.log(props)
    return (
        <div className='product'>
            <img src={img} alt="" />

            <div className="product-info">
            <h4>Name:{name}</h4>
            <p>price: ${price}</p>
            <p>Stock: {stock}</p>
            </div>
            <button className='btn-add'>
                <p>addToCart</p>
            </button>

        </div>
    );
};

export default Product;