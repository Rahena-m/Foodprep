import React, { useState,useContext,useEffect} from 'react'
import { assets } from '../../assets/assets'
import './FoodCard.css'
import { StoreContext } from '../../context/StoreContext'
const FoodCard = ({id,name,price,description,image}) => {
  const {cartItems,setCartItems,addToCart,removeFromCart}=useContext(StoreContext);
  useEffect(()=>{
    console.log(cartItems)
  },[cartItems])

  return (
    <div className='food-item'>
      <div className="food-item-image-container">
         <img src={image} alt="" className="food-item-image" />
         {
         !cartItems[id] ? <img onClick={() => addToCart(id)} src={assets.add_icon_white} className="add" alt="add item" />
           : <div className="food-item-counter">
             <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="remove item" />
              <p>{cartItems[id]}</p>
              <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="add more" />
            </div>
                
         }
      </div>
      <div className="food-item-info">
        <p className="food-item-name">{name}</p>
        <p className='food-item-desc'>{description}</p>
        <div className="food-item-price-rating">
            <p className="food-item-price">₹{price}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
      </div>
    </div>
  )
}

export default FoodCard
