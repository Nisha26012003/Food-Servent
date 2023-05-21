import '../style/Breakfast.css'
import dosa from '../Assert/breakfast/dosame.jpg'
import idly from '../Assert/breakfast/idly.jpg'
import pongal from '../Assert/breakfast/pongal.jpg'
import upma from '../Assert/breakfast/upma.jpg'
import oniondosa from '../Assert/breakfast/oniondosa.jpg'
import addai from '../Assert/breakfast/addai.jpg'
import appam from '../Assert/breakfast/appam.jpg'
import idaiappam from '../Assert/breakfast/idaiappam.jpg'
import poori from '../Assert/breakfast/poori.jpg'
import puttu from '../Assert/breakfast/puttu.jpg'
import masaldosa from '../Assert/breakfast/masaldosa.jpg'
import parrota from '../Assert/breakfast/parrota.jpg'
 import {Link} from "react-router-dom";
import React, { useState } from 'react';
function Breakfast(){
	const myArray =[];
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
	<center><h1 id="h1">MENU TO ORDER BREAKFAST</h1></center>
	<div id="div4"><h2 id='h2'></h2><button onClick={order}>order complete</button><Link to="/Final"><button>confirm</button></Link></div> 
	  <div id="div1">
		<div id="divb">
			 <Link to="/Edit">
		<button id="buut">&#9998;</button>
		</Link> 
			<img src={dosa} id="img1"/>
			<p id="p1">DOSA</p>
			<p id="p2"> &#8377;60</p>
			<button id="but" onClick={A}>order</button>
		</div>
		<div id="divb">
		{/* <Link to="/Edit">
		<button id="buut">&#9998;</button>
		</Link> */}
		<img src={masaldosa} id="img1"/>
			<p id="p3">MASAL DOSA</p>
			<p id="p4">&#8377;80</p>
			<button id="but" onClick={B}>order</button>
		</div>
		<div id="divb">
		{/* <Link to="/Edit">
		<button id="buut">&#9998;</button>
		</Link> */}
		<img src={idly} id="img1"/>
			<p id="p5">IDLI</p>
			<p id="p6">&#8377;40</p>
			<button id="but" onClick={C}>order</button>
		</div>
		<div id="divb">
		{/* <Link to="/Edit">
		<button id="buut">&#9998;</button>
		</Link> */}
		<img src={pongal} id="img1"/>
			<p id="p7">PONGAL</p>
			<p id="p8">&#8377;70</p>
			<button id="but" onClick={D}>order</button>
		</div>
		<div id="divb">
		{/* <Link to="/Edit">
		<button id="buut">&#9998;</button>
		</Link> */}
		<img src={upma} id="img1"/>
			<p id="p9">UPMA</p>
			<p id="p10">&#8377;70</p>
			<button id="but" onClick={E}>order</button></div>
		<div id="divb">
		{/* <Link to="/Edit">
		<button id="buut">&#9998;</button>
		</Link> */}
		<img src={oniondosa} id="img1"/>
			<p id="p11">ONION DOSA</p>
			<p id="p12">&#8377;80</p>
			<button id="but" onClick={F}>order</button>
		</div>
		<div id="divb">
		{/* <Link to="/Edit">
		<button id="buut">&#9998;</button>
		</Link> */}
		<img src={addai} id="img1"/>
			<p id="p13">ADDAI</p>
			<p id="p14">&#8377;50</p>
			<button id="but" onClick={G}>order</button>
        </div>
		<div id="divb">
		{/* <Link to="/Edit">
		<button id="buut">&#9998;</button>
		</Link> */}
		<img src={idaiappam} id="img1"/>
			<p id="p15">IDI APPAM</p>
			<p id="p16">&#8377;30</p>
			<button id="but" onClick={H}>order</button>
		</div>
		<div id="divb">
		{/* <Link to="/Edit">
		<button id="buut">&#9998;</button>
		</Link> */}
		<img src={poori} id="img1"/>
			<p id="p17">POORI</p>
			<p id="p18">&#8377;60</p>
			<button id="but" onClick={I}>order</button>
		</div>
		<div id="divb">
		{/* <Link to="/Edit">
		<button id="buut">&#9998;</button>
		</Link> */}
		<img src={parrota} id="img1"/>
			<p id="p19">PARROTA</p>
			<p id="p20">&#8377;50</p>
			<button id="but" onClick={J}>order</button>
		</div>
		<div id="divb">
		{/* <Link to="/Edit">
		<button id="buut">&#9998;</button>
		</Link> */}
		<img src={puttu} id="img1"/>
			<p id="p21">PUTTU</p>
			<p id="p22">&#8377;100</p>
			<button id="but" onClick={K}>order</button>
		</div>
		<div id="divb">
		{/* <Link to="/Edit">
		<button id="buut">&#9998;</button>
		</Link> */}
		<img src={appam} id="img1"/>
			<p id="p23">APPAM</p>
			<p id="p24">&#8377;50</p>
			<button id="but" onClick={L}>order</button>
		</div>
	</div> 
    </div>
    );
	
}
export default Breakfast;