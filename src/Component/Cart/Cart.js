import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const{cart}=props;

    let total=0;
    for(const product of cart){
        total=product.price+total;
    }
   

    return (
        <div className='cart'>
             <h2>Bonshai CartInfo</h2>
             <p>selectedItem:{cart.length}</p>
             <p>Name:{cart.name}</p>
                <img src={cart.img}alt="" />
             <p>Total price:${total}</p>
             <button>order now</button>
        </div>
        
    );
};

export default Cart;