// components/Navbar.js
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-green-600">
        <Link to="/">Quran.co</Link>
      </h1>
      <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/values">How it's works </Link></li>
        <li><Link to="/tafsir">Tafsir</Link></li>
        <li><Link to="/translation">Translation</Link></li>
        <li><Link to="/donate">Donate</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/account">My Account</Link></li>
      </ul>
    </nav>
  );
}

