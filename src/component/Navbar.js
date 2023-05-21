import React from 'react'
import {Link} from "react-router-dom";
import { FaSearchMinus} from 'react-icons/fa';
import '../style/Navbar.css';
function Navbar() {
  return (
    <div className='navbar' >
        <div className='leftSide'>
            <FaSearchMinus className='icons'/><input type='text' className='input'/>
            <p className='head'>FOOD SERVENT</p>
           
        </div>
        <div className='rigthSide'>
          <br></br>
       <Link to="/" >home</Link>
       <Link to="/menu">menu</Link>
        <Link to="/about">help</Link>                                                                                                                                                                                                                                                                                                                              
        </div>
          
    </div>
  )
}

export default Navbar
