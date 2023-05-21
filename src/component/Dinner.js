import '../style/Dinner.css'
import dosa from '../Assert/breakfast/dosame.jpg'
import idly from '../Assert/breakfast/idly.jpg'
import masaldosa from '../Assert/breakfast/masaldosa.jpg'
import parrota from '../Assert/breakfast/parrota.jpg'
import noodles from '../Assert/dinner/noodles.jpg'
import kothuparota from '../Assert/dinner/kothuparota.jpg'
import bunparota from '../Assert/dinner/bunparota.jpg'
import chilliparota from '../Assert/dinner/chilliparota.jpg'
import {Link} from "react-router-dom";
function Dinner(){
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
	  
	   function order(){
		var h2=document.querySelector("#h2");
		h2.textContent=myArray;
	   }
	
    return(
        <div>
	<center><h1 id="h1">MENU TO ORDER DINNER</h1></center>
	<div id="div4"><h2 id='h2'></h2><button onClick={order}>order complete</button><Link to="/Final"><button>confirm</button></Link></div> 
	  <div id="div1">
		<div id="div2">
			<img src={dosa} id="img1"/>
			<p id="p1">DOSA</p>
			<p id="p2"> &#8377;70</p>
			<button id="but" onClick={A}>order</button>
		</div>
		<div id="div2">
		<img src={idly} id="img1"/>
			<p id="p3">IDLI</p>
			<p id="p4">&#8377;40</p>
			<button id="but" onClick={B}>order</button>
		</div>
		<div id="div2">
		<img src={masaldosa} id="img1"/>
			<p id="p5">MASAL DOSA</p>
			<p id="p6">&#8377;90</p>
			<button id="but" onClick={C}>order</button>
		</div>
		<div id="div2">
		<img src={parrota} id="img1"/>
			<p id="p7">PAROTA</p>
			<p id="p8">&#8377;57</p>
			<button id="but" onClick={D}>order</button>
		</div>
		<div id="div2">
		<img src={noodles} id="img1"/>
			<p id="p9">NOODLES</p>
			<p id="p10">&#8377;120</p>
			<button id="but" onClick={E}>order</button></div>
		<div id="div2">
		<img src={kothuparota} id="img1"/>
			<p id="p11">KOTHU PAROTA</p>
			<p id="p12">&#8377;90</p>
			<button id="but" onClick={F}>order</button>
		</div>
		<div id="div2">
		<img src={bunparota} id="img1"/>
			<p id="p13">BUN PAROTA</p>
			<p id="p14">&#8377;60</p>
			<button id="but" onClick={G}>order</button>
        </div>
		<div id="div2">
		<img src={chilliparota} id="img1"/>
			<p id="p15">CHILLI PAROTA</p>
			<p id="p16">&#8377;120</p>
			<button id="but" onClick={H}>order</button>
		</div>
	</div> 
    </div>
    );
}
export default Dinner;