// App.js
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Values from "./components/Values";
import Tafsir from "./components/Tafsir";
import Translation from "./components/Translation";
import Donate from "./components/Donate";
import Search from "./components/Search";
import Account from "./components/Account";

export default function App() {
  return (
  <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/values" element={<Values />} />
        <Route path="/tafsir" element={<Tafsir />} />
        <Route path="/translation" element={<Translation />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/search" element={<Search />} />
        <Route path="/account" element={<Account />} />
      </Routes>
  </>
  );
}
