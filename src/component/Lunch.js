import '../style/Lunch.css'
import fullmeals from '../Assert/lunch/fullmeals.jpg'
import lemonrice from '../Assert/lunch/lemonrice.jpg'
import tamarind from '../Assert/lunch/tamarindrice.jpg'
import curdrice from '../Assert/lunch/curdrice.jpg'
import tomatorice from '../Assert/lunch/tomatorice.jpg'
import pudinarice from '../Assert/lunch/pudinarice.jpg'
import chibiriyani from '../Assert/lunch/chibiriyani.jpg'
import mutbiriyani from '../Assert/lunch/mutbiriyani.jpg'
import grill from '../Assert/lunch/grill.jpg'
import lolly from '../Assert/lunch/lolly.jpg'
import fishbiriyani from '../Assert/lunch/fishbiriyani.jpg'
import fishchilli from '../Assert/lunch/fishchilli.jpg'
import {Link} from "react-router-dom";
function Lunch(){
	const myArray = [];
	function A(){
		const aa=document.getElementById('p1');
		  var content =aa.textContent;
		  myArray.push(content);
	   }
	   function B(){
		const aa=document.getElementById('p3');
		  var content =aa.textContent;
		  myArray.push(content);
	   }
	   function C(){
		const aa=document.getElementById('p5');
		  var content =aa.textContent;
		  myArray.push(content);
	   }
	   function D(){
		const aa=document.getElementById('p7');
		  var content =aa.textContent;
		  myArray.push(content);
	   }
	   function E(){
		const aa=document.getElementById('p9');
		  var content =aa.textContent;
		  myArray.push(content);
	   }
	   function F(){
		const aa=document.getElementById('p11');
		  var content =aa.textContent;
		  myArray.push(content);
	   }
	   function G(){
		const aa=document.getElementById('p13');
		  var content =aa.textContent;
		  myArray.push(content);
	   }
	   function H(){
		const aa=document.getElementById('p15');
		  var content =aa.textContent;
		  myArray.push(content);
	   }
	   function I(){
		const aa=document.getElementById('p17');
		  var content =aa.textContent;
		  myArray.push(content);
	   }
	   function J(){
		const aa=document.getElementById('p19');
		  var content =aa.textContent;
		  myArray.push(content);
	   }
	   function K(){
		const aa=document.getElementById('p21');
		  var content =aa.textContent;
		  myArray.push(content);
	   }
	   function L(){
		const aa=document.getElementById('p23');
		  var content =aa.textContent;
		  myArray.push(content);
	   }
	   function order(){
		var h2=document.querySelector("#h2");
		h2.textContent=myArray;
	   }
	
    return(
        <div>
	<center><h1 id="h1">MENU TO ORDER LUNCH</h1></center>
 <div id="div4"><h2 id='h2'></h2><button onClick={order}>order complete</button><Link to="/Final"><button>confirm</button></Link></div> 
	  <div id="div1">
		<div id="div2">
			<img src={fullmeals} id="img1"/>
			<p id="p1">FULLMEALS</p>
			<p id="p2"> &#8377;110</p>
			<button id="but" onClick={A}>order</button>
		</div>
		<div id="div2">
		<img src={lemonrice} id="img1"/>
			<p id="p3">LEMON RICE</p>
			<p id="p4">&#8377;75</p>
			<button id="but" onClick={B}>order</button>
		</div>
		<div id="div2">
		<img src={tamarind} id="img1"/>
			<p id="p5">TAMARIND RICE</p>
			<p id="p6">&#8377;75</p>
			<button id="but" onClick={C}>order</button>
		</div>
		<div id="div2">
		<img src={curdrice} id="img1"/>
			<p id="p7">CURD RICE</p>
			<p id="p8">&#8377;97</p>
			<button id="but" onClick={D}>order</button>
		</div>
		<div id="div2">
		<img src={tomatorice} id="img1"/>
			<p id="p9">TOMATO RICE</p>
			<p id="p10">&#8377;65</p>
			<button id="but" onClick={E}>order</button></div>
		<div id="div2">
		<img src={pudinarice} id="img1"/>
			<p id="p11">PUTHINA RICE</p>
			<p id="p12">&#8377;60</p>
			<button id="but" onClick={F}>order</button>
		</div>
		<div id="div2">
		<img src={chibiriyani} id="img1"/>
			<p id="p13">CHIKEN BIRIYANI</p>
			<p id="p14">&#8377;150</p>
			<button id="but" onClick={G}>order</button>
        </div>
		<div id="div2">
		<img src={mutbiriyani} id="img1"/>
			<p id="p15">MUTTON BIRIYANI</p>
			<p id="p16">&#8377;200</p>
			<button id="but" onClick={H}>order</button>
		</div>
		<div id="div2">
		<img src={grill} id="img1"/>
			<p id="p17">CHIKEN GRILL</p>
			<p id="p18">&#8377;350</p>
			<button id="but" onClick={I}>order</button>
		</div>
		<div id="div2">
		<img src={lolly} id="img1"/>
			<p id="p19">CHIKEN LOPPY POP</p>
			<p id="p20">&#8377;110</p>
			<button id="but" onClick={J}>order</button>
		</div>
		<div id="div2">
		<img src={fishbiriyani} id="img1"/>
			<p id="p21">FISH BIRIYANI</p>
			<p id="p22">&#8377;180</p>
			<button id="but" onClick={K}>order</button>
		</div>
		<div id="div2">
		<img src={fishchilli} id="img1"/>
			<p id="p23">FISH CHILLI</p>
			<p id="p24">&#8377;100</p>
			<button id="but" onClick={L}>order</button>
		</div>
	</div> 
    </div>
    );
}
export default Lunch;