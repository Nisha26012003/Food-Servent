
import './App.css';
import Navbar from './component/Navbar';
import {Routes,Route} from 'react-router-dom'
import Home from './component/Home';
import Menu from './component/Menu'
import Breakfast from './component/Breakfast';
import Lunch from './component/Lunch';
import Dinner from './component/Dinner'
import Chaitems from './component/ChatItems';
import Fried from './component/Fried';
import Final from './component/Final'
import Order from './component/Order';
import Login from './component/Login';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Menu" element={<Menu/>}/>
      <Route path="/Breakfast" element={<Breakfast/>}/>
      <Route path="/Lunch" element={<Lunch/>}/>
      <Route path="/Dinner" element={<Dinner/>}/>
      <Route path="/Chatitems" element={<Chaitems />}/>
      <Route path="/Fried" element={<Fried/>}/>
      <Route path="/Final" element={<Final/>}/>
      <Route path="/Order" element={<Order/>}/>
      <Route path="/Login" element={<Login/>}/>





      
      </Routes>
          </div>
  );
}

export default App;
