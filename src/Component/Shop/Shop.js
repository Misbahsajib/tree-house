import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
import Cart  from '../Cart/Cart';

const Shop = () => {
    const[product,setProduct]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    const [cart,setCart]=useState([]);
    const handelAddToCart=(product)=>{
        console.log(product)
        const newcart=[...cart,product];
       setCart(newcart)
        

    }
    return (
        <div className='shop-container'> 
            <div className="product-container">

                {
                    product.map(product=> <Product key={product.id}
                    product={product}
                    handelAddToCart={handelAddToCart}
                    ></Product>)
                }

            </div>
            <div className="cart-container">
                     <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Shop;