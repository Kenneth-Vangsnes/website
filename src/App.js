import './App.css';
import {Route, Routes} from "react-router-dom"

import HomePage from "./Pages/"
import Navbar from './components/Navbar';
import About from "./Pages/About"
import Menu from "./Pages/Menu"
import Cart from './Pages/Cart';

function App() {
  return (
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
  );
}

export default App;


/* 

-- Menu --
  - Open and close different category independently
  - Filter for main ingredient, allergies etc

-- CSS -- 
 - Styling


*/