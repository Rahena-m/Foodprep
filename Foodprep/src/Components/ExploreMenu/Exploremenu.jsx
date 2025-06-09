import React from 'react'
import {menu_list} from '../../assets/assets'
import './Exploremenu.css'
const Exploremenu = ({category,setcategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings 
        and elevate your dining experience, one delicious meal at a time</p>
        <div className="explore-list">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>
                    setcategory(category=>category===item.menu_name?"All":item.menu_name)} 
                    key={index} className="explore-menu-list">
                        <img className={category===item.menu_name?'active':''} src={item.menu_image} alt="" />
                        <p> {item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr/>
    </div>
  )
}

export default Exploremenu
