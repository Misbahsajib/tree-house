import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
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
            <button onClick={()=>props.handelAddToCart(props.product)} className='btn-add'>
                <h5>addToCart</h5>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Product;