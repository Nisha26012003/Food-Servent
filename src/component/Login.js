import React from 'react'
import {Link} from "react-router-dom"
import '../style/Login.css'
function Login(){
    return(
  <div id='divum'>
    <h1 id='hh'>LOGIN</h1>
    <p id='pp'>username</p>
    <input id='iii' type='text'/>
    <p id='pp'>password</p>
    <input id='iii' type='password'/><br></br>
    <br></br>
    <br></br>
    <br></br>
    <Link to='/'><button>Login</button></Link>
    </div>
      
    );
}
export default Login;