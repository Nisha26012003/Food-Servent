import '../style/Fried.css'
import biriyani from '../Assert/frid/biriyani.jpg'
import chikenfry from '../Assert/frid/chikenfry.jpg'
import chikenwings from '../Assert/frid/chikenwings.jpg'
import chilliparota from '../Assert/frid/chilliparota.jpg'
import eggdosa from '../Assert/frid/eggdosa.jpg'
import fridrice from '../Assert/frid/fridrice.jpg'
import kalan from '../Assert/frid/kalan.jpg'
import kothuparota from '../Assert/frid/kothuparota.jpg'
import noodles from '../Assert/frid/noodles.jpg'
import pepperchiken from '../Assert/frid/pepperchiken.jpg'
import {Link} from "react-router-dom";
function Fried(){
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
	   function order(){
		var h2=document.querySelector("#h2");
		h2.textContent=myArray;
	   }
	
    return(
        <div>
	<center><h1 id="h1">MENU TO ORDER FRIED FOOD</h1></center>
	<div id="div4"><h2 id='h2'></h2><button onClick={order}>order complete</button><Link to="/Final"><button>confirm</button></Link></div>
	  <div id="div1">
		<div id="div2">
			<img src={biriyani} id="img1"/>
			<p id="p1">BIRIYANI</p>
			<p id="p2"> &#8377;180</p>
			<button id="but" onClick={A}>order</button>
		</div>
		<div id="div2">
		<img src={chikenfry} id="img1"/>
			<p id="p3">CHIKEN FRY</p>
			<p id="p4">&#8377;100</p>
			<button id="but" onClick={B}>order</button>
		</div>
		<div id="div2">
		<img src={chikenwings} id="img1"/>
			<p id="p5">CHIKEN WINGS</p>
			<p id="p6">&#8377;120</p>
			<button id="but" onClick={C}>order</button>
		</div>
		<div id="div2">
		<img src={chilliparota} id="img1"/>
			<p id="p7">CHILLI PAROTA</p>
			<p id="p8">&#8377;80</p>
			<button id="but" onClick={D}>order</button>
		</div>
		<div id="div2">
		<img src={eggdosa} id="img1"/>
			<p id="p9">EGG DOSA</p>
			<p id="p10">&#8377;65</p>
			<button id="but" onClick={E}>order</button></div>
		<div id="div2">
		<img src={fridrice} id="img1"/>
			<p id="p11">FRID RICE</p>
			<p id="p12">&#8377;80</p>
			<button id="but" onClick={F}>order</button>
		</div>
		<div id="div2">
		<img src={kalan} id="img1"/>
			<p id="p13">KALAN</p>
			<p id="p14">&#8377;50</p>
			<button id="but" onClick={G}>order</button>
        </div>
		<div id="div2">
		<img src={kothuparota} id="img1"/>
			<p id="p15">KOTHU PAROTA</p>
			<p id="p16">&#8377;90</p>
			<button id="but" onClick={H}>order</button>
		</div>
		<div id="div2">
		<img src={noodles} id="img1"/>
			<p id="p17">NOODLES</p>
			<p id="p18">&#8377;80</p>
			<button id="but" onClick={I}>order</button>
		</div>
		<div id="div2">
		<img src={pepperchiken} id="img1"/>
			<p id="p19">PEPPER CHIKEN</p>
			<p id="p20">&#8377;70</p>
			<button id="but" onClick={J}>order</button>
		</div>
	</div> 
    </div>
    );
}
export default Fried;