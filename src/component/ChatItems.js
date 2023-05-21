import '../style/Chatitems.css'
import bhelpoori from '../Assert/chatitems/bhelpoori.jpg'
import SevPuri from '../Assert/chatitems/SevPuri.jpg'
import alooTikki from '../Assert/chatitems/alooTikki.jpg'
import dahivada from '../Assert/chatitems/dahivada.jpg'
import panipuri from '../Assert/chatitems/panipuri.jpg'
import vadapav from '../Assert/chatitems/vadapav.jpg'
import chanachaat from '../Assert/chatitems/chanachaat.jpg'
import samosachole from '../Assert/chatitems/samosachole.jpg'
import peanutchaat from '../Assert/chatitems/peanutchaat.jpg'
import dabeli from '../Assert/chatitems/dabeli.jpg'
import swarma from '../Assert/chatitems/swarma.jpg'
import momos from '../Assert/chatitems/momos.jpg'
import {Link} from "react-router-dom";
function Chaitems(){
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
	<center><h1 id="h1">MENU TO ORDER PIZZA</h1></center>
	<div id="div4"><h2 id='h2'></h2><button onClick={order}>order complete</button><Link to="/Final"><button>confirm</button></Link></div>
	  <div id="div1">
		<div id="div2">
			<img src={bhelpoori} id="img1"/>
			<p id="p1">BHEL PURI</p>
			<p id="p2"> &#8377;80</p>
			<button id="but" onClick={A}>order</button>
		</div>
		<div id="div2">
		<img src={SevPuri} id="img1"/>
			<p id="p3">SEV PURI</p>
			<p id="p4">&#8377;75</p>
			<button id="but" onClick={B}>order</button>
		</div>
		<div id="div2">
		<img src={alooTikki} id="img1"/>
			<p id="p5">ALOO TIKKI</p>
			<p id="p6">&#8377;75</p>
			<button id="but" onClick={C}>order</button>
		</div>
		<div id="div2">
		<img src={dahivada} id="img1"/>
			<p id="p7">DAHI VADA</p>
			<p id="p8">&#8377;67</p>
			<button id="but" onClick={D}>order</button>
		</div>
		<div id="div2">
		<img src={panipuri} id="img1"/>
			<p id="p9">PANI PURI</p>
			<p id="p10">&#8377;65</p>
			<button id="but" onClick={E}>order</button></div>
		<div id="div2">
		<img src={vadapav} id="img1"/>
			<p id="p11">VADA PAV</p>
			<p id="p12">&#8377;80</p>
			<button id="but" onClick={F}>order</button>
		</div>
		<div id="div2">
		<img src={chanachaat} id="img1"/>
			<p id="p13">CHANA CHAAT</p>
			<p id="p14">&#8377;100</p>
			<button id="but" onClick={G}>order</button>
        </div>
		<div id="div2">
		<img src={samosachole} id="img1"/>
			<p id="p15">SAMOSA CHOLE</p>
			<p id="p16">&#8377;60</p>
			<button id="but" onClick={H}>order</button>
		</div>
		<div id="div2">
		<img src={peanutchaat} id="img1"/>
			<p id="p17">PEANUT CHAAT</p>
			<p id="p18">&#8377;50</p>
			<button id="but" onClick={I}>order</button>
		</div>
		<div id="div2">
		<img src={dabeli} id="img1"/>
			<p id="p19">DABELI</p>
			<p id="p20">&#8377;50</p>
			<button id="but" onClick={J}>order</button>
		</div>
		<div id="div2">
		<img src={swarma} id="img1"/>
			<p id="p21">CHIKEN SWARMA</p>
			<p id="p22">&#8377;120</p>
			<button id="but" onClick={K}>order</button>
		</div>
		<div id="div2">
		<img src={momos} id="img1"/>
			<p id="p23">MOMOS</p>
			<p id="p24">&#8377;80</p>
			<button id="but" onClick={L}>order</button>
		</div>
	</div> 
    </div>
    );
}
export default Chaitems;