import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from "./components/Navbar";
import { MenuItems } from "./components/MenuItems";
import { Cart } from "./components/Cart";
import { Home } from "./components/Home";
import { Promotion } from './components/Promotion';
import { About } from './components/About';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuItems />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/promotion" element={<Promotion />} />
        <Route path="/about" element={<About />} />
      
      </Routes>
    </Router>
  );
}

export default App;
