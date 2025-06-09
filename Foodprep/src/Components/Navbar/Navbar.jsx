
import React, { useContext,useState } from 'react'
import {Link} from 'react-router-dom'
import {assets} from '../../assets/assets'
import './Navbar.css'
import { StoreContext } from '../../context/StoreContext'
const Navbar=({showLogin,setShowLogin})=> {
    const [menu,setMenu] = useState("home");
    const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <div className='navbar'>
      <Link to='/'onClick={()=>setMenu("home")}><img className='logo' src={assets.logo} alt="logo" /></Link>
      <ul className='nav-centre'>
        <Link to='/' onClick={()=>setMenu("home")} className={menu==='home'?"active":""}>Home</Link>
        <a href="#explore-menu"><li onClick={()=>setMenu("menu")} className={menu==='menu'?"active":""}>Menu</li></a>
        <a href="#footer"><li onClick={()=>setMenu("contact-us")} className={menu==='contact-us'?"active":""}>Contact us</li></a>
      </ul>
      <div className='navbar-right'>
         <Link to='/cart'><img className='navbar-basket_icon' src={assets.basket_icon} alt="basket_icon" /></Link>
       <div className={getTotalCartAmount() ===0?'':'dot'}></div>
       <button  onClick={()=>setShowLogin(true)} className='nav-button'>Sign in</button>
      </div>
    </div> 
  )
}

export default Navbar
