import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const{cart}=props;
    for(const product of cart){
        
    }
    return (
        <div className='cart'>
             <h2>Bonshai CartInfo</h2>
             <p>selectedItem:{cart.length}</p>
        </div>
    );
};

export default Cart;