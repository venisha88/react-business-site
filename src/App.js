import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import  About from "./pages/About";
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />   

        <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        </div>
        
        <Footer />
    </div>
  );
}

export default App;
