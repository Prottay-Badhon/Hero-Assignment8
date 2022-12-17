import React from 'react';
import "./Cart.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
  const cart = props.cart;
//   const removeItem = props.removeProduct;
    return (
        <div className='cart-container'>
           {
                cart.map(product =>{ 
                    const {id,name,image}=product;
                    return <div className='cart'>
                               <div className='cart-image'>
                                   <img src={image} alt="" />
                               </div>
                                <h2>{name}</h2>
                                <FontAwesomeIcon icon={faTrash} className='trash-icon' onClick={()=>removeItem(id)}></FontAwesomeIcon>
                            </div>
                   }
                )
           }
        </div>
    );
};

export default Cart;