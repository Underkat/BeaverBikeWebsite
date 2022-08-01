import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/drawings" element={<Drawings />} />
          <Route path="/pottery" element={<Pottery />} />
          <Route path="/paintings" element={<Paintings />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App