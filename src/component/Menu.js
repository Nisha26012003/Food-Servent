import React from 'react'
import '../style/Menu.css';
import dosa from '../Assert/dosamenu.jpg';
import lunch from '../Assert/lunch.jpg';
import dinner from '../Assert/dinner.jpg';
import chatitems from '../Assert/chatitems.jpg';
import fried from '../Assert/fried.jpg';
import cooldrink from '../Assert/cooldrink.jpg';
 import {Link} from "react-router-dom";
function Menu() {
  return (
    <div>
      <div id="div5">
      <div id="div6">
        <img src={dosa} style={{width:"200px",height:"200px"}}/>
        <p id="pp1">Breakfast</p>
         <Link to={'/Breakfast'}>
        <button id="bu2">Go to Other Page</button>
      </Link>
      </div>
      <div id="div6">
      <img src={lunch} style={{width:"200px",height:"200px"}}/>
        <p id="pp1">Lunch</p>
         <Link to={'/Lunch'}>
        <button id="bu2">Go to Other Page</button>
      </Link> 
      </div>
      <div id="div6">
      <img src={dinner} style={{width:"200px",height:"200px"}}/>
        <p id="pp1">Dinner</p>
         <Link to="/Dinner">       
        <button id="bu2">order</button>
        </Link> 
 
      </div>
      <div id="div6">
      <img src={chatitems} style={{width:"200px",height:"200px"}}/>
        <p id="pp1">Chat items</p>
         <Link to="/Chatitems">
        <button id="bu2">order</button>
        </Link> 
      </div>
      <div id="div6">
      <img src={fried} style={{width:"200px",height:"200px"}}/>
        <p id="pp1">Fried Food</p>
         <Link to="/Fried">
        <button id="bu2">order</button>
        </Link> 
      </div>
      <div id="div6">
      <img src={cooldrink} style={{width:"200px",height:"200px"}}/>
        <p id="pp1">COOLDRINK</p>
        <button id="bu2">order</button>
      </div>
</div>
    </div>
  )
}

export default Menu
