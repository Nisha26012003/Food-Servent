import React from 'react'
import '../style/Final.css';
import {Link} from "react-router-dom";
function Finalpage(){
    return(
  <div id='d12'>
	 <div id="div11">
    <p id='hh1'>confirm info</p>
    <p id="pr1">NAME<input type="text" id="in1"/></p><br/><br/>
    <p id="pr1">TABLE NO<input type="number" id="in"/></p><br/><br/>
    <p id="pr1">PHONE NO<input type="text" id="in"/></p><br/><br/>
    <p id="pr1"><input type="checkbox"/>i agree for this order</p>
    <Link to="/Order"><button id="butt">order</button></Link> 
  </div>
    </div>
      
    );
}
export default Finalpage;