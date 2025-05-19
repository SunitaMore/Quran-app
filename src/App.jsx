// App.js
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Values from "./components/Values";
import Services from "./components/Services"; // New "Our Services" component
import Search from "./components/Contact";
import Account from "./components/Account";
// import Footer from "./components/Footer"; // Optional Footer

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/values" element={<Values />} />
        <Route path="/services" element={<Services />} />
        <Route path="/search" element={<Search />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}
