import React from 'react'
import {Link} from "react-router-dom";
import '../style/Home.css'
function Home() {
  return (
    <div className='home'>
      <div  className='home2
      ' >
        <h1>For the love of delicious food.</h1>
        <h1>Low cost. High quality.</h1>
        <span><Link to="/Login">
        <button>Sign up</button> 
        </Link>
        </span>
             </div>
    </div>
  )
}

export default Home
