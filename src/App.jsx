import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Router, Routes, Route } from 'react-router-dom';
import AboutUs from "./pages/AboutUs"
import Faculty from "./pages/Faculty";
import HandProject from "./pages/HandProject"
import HireforUs from "./pages/HireforUs"
function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/faculty" element={<Faculty/>}/>
        <Route path="/handproject" element={<HandProject/>}/>
        <Route path="/hireforus" element={<HireforUs/>}/>
      </Routes>

    </>
  );
}

export default App;
// App.jsx
