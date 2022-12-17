import React from 'react';
import "./Product.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const product=props.product;
    const {id,image,price,name}=product
    return (
        <div className='product'>
            <img src={image} alt="" />
            <div className="product-info">
                <h2>{name}</h2>
                <h4>$ {price}</h4>
                <button class="cart-btn" onClick={()=>props.cartHandler(product)}>
                <p>ADD TO CART</p> 
                <FontAwesomeIcon class="cart-icon" icon={faShoppingCart} />
                </button>
            </div>
        </div>
    );
};

export default Product;