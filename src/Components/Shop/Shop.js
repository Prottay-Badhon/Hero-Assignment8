import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import StateVsProps from '../StateVsProps/StateVsProps';

const Shop = () => {
    const [products, setProducts]=useState([])
    const [cart,setCart]=useState([])
    const [choose,setChoose]=useState([]);
    const [toggle,setToggle]=useState(0);

    useEffect(()=>{
        fetch('product.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const cartHandler=(selectedProduct)=>{
        const exist = cart.find(product=>product.id===selectedProduct.id);
        let newCart=[];
        if(!exist){
            selectedProduct.quantity =1;
            newCart=[...cart,selectedProduct];
        }
        else{
            const rest = cart.filter(product=>product.id !== selectedProduct.id);
            exist.quantity= exist.quantity+1;
            newCart(...rest,exist);
        }
        setCart(newCart);
    }
    const removeProduct =(id)=>{
      const rest = cart.filter(product => product.id !== id);
        setCart(rest);
    }
    const removeCart =()=>{
          setCart([]);
          setChoose([]);
          setToggle(0);
      }
      const randomSelect=()=>{
        let randomIndex = Math.floor((Math.random() * cart.length));
         setChoose(cart[randomIndex]);
         setToggle(1);
      }
     
      const clearChoose=()=>{
        setChoose([]);
        setToggle(0);
      }
        
    return (
     <div className='shopping-container'>
        <h1>Watch Fashion</h1>   
        <div className="shop">
            
            <div className="shopping-product">
              {
                products.map(product => <Product product={product} key={product.id} cartHandler={cartHandler}></Product>)
              }
            </div>
            <div className="shopping-cart">
                <Cart cart={cart} removeProduct={removeProduct}></Cart>                   
                   <div className="choose-btn-container">
                      <button className='choose-btn' onClick={()=>randomSelect()}> Choose One for Me</button>
                   </div>
                   <div className="clear-btn-container">
                        <button onClick={()=>removeCart()} className="clr-cart-btn">Choose Again</button>
                   </div>
                   {
                    <div className='cart'>
                        <div className='cart-image'>
                            <img src={choose.image} alt="" />
                        </div>
                            <h2>{choose.name}</h2>
                            <FontAwesomeIcon icon={faTrash}  className={toggle?'trash-icon':'hide-trash'} onClick={()=>clearChoose()}></FontAwesomeIcon>
                     </div>
                   }
            </div>
            <StateVsProps></StateVsProps>
        </div>
    </div>

    );
};

export default Shop;