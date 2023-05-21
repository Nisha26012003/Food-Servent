import React from 'react'
import {FaInstagram,FaYoutube,FaTwitter,} from 'react-icons/fa';
import '../style/Order.css';
import train from "../Assert/train.gif"
function Order() {
  const val=15;
  const i=0
  var count=document.querySelector("#count");
  
  return (
    <div id='o1'> 
      <h1 id='o2'>YOUR ORDER IS PLACED PLEASE</h1>
      <h1 id='o2'>WAIT FOR 15 min............</h1>
      <img id='frame'  src={train}/>
      <h3>food is preparing....</h3>

            <FaInstagram id='o3'/>
            <FaYoutube id='o3'/>
            <FaTwitter id='o3'/> 
         </div>
  )
}

export default Order
