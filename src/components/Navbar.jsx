
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Adjust path to your logo

export default function Navbar() {
  return (
<<<<<<< HEAD
    <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-green-600">
        <Link to="/">Quran.co</Link>
      </h1>
      <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/values">How it's works </Link></li>
=======
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      {/* Logo and Brand */}
      <Link to="/" className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="w-10 h-10" />
        <span className="text-xl font-bold text-green-600">Quran.co</span>
      </Link>

      {/* Nav Links */}
      <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/values">How It Works</Link></li>
>>>>>>> 5a547e58bacb3cbeea3ea6e85c217fa870a0951b
        <li><Link to="/tafsir">Tafsir</Link></li>
        <li><Link to="/translation">Translation</Link></li>
        <li><Link to="/donate">Donate</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/account">My Account</Link></li>
      </ul>
    </nav>
  );
}

