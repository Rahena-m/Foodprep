import React from 'react'

import './Header.css'
const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
      <h1>Order your favorite food here</h1>
      <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
       <a href="#food-display"><button className="button-header">View Menu</button></a>
        </div>
    </div>
  )
}

export default Header
