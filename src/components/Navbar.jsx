
// import { Link } from "react-router-dom";
// import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

// export default function Navbar() {
//   const navButtonClass =
//     "bg-[#02588F] text-white px-4 py-2 rounded-md border-2 border-gray-400 " +
//     "shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_4px_6px_rgba(0,0,0,0.3)] " +
//     "hover:bg-[#068479] active:translate-y-[2px] transition duration-200";

//   return (
//     <nav className="bg-white shadow-md px-6 py-3 flex flex-col md:flex-row justify-between items-center sticky top-0 z-50">
      
//       {/* Left: Contact Info */}
//       <div className="flex items-center space-x-6 text-black-600 text-sm mb-2 md:mb-0">
//         <div className="flex items-center space-x-1">
//           <FaEnvelope />
//           <span>info@example.com</span>
//         </div>
//         <div className="flex items-center space-x-1">
//           <FaPhoneAlt />
//           <span>+91 98765 43210</span>
//         </div>
//         <div className="flex items-center space-x-1">
//           <FaMapMarkerAlt />
//           <span>New Delhi, India</span>
//         </div>
//       </div>

//       {/* Right: Navigation Buttons */}
//       <ul className="flex flex-wrap justify-center md:justify-end space-x-2 text-sm font-medium">
//         <li><Link to="/" className={navButtonClass}>Home</Link></li>
//         <li><Link to="/about" className={navButtonClass}>About Us</Link></li>
//         <li><Link to="/values" className={navButtonClass}>How It Works</Link></li>
//         <li><Link to="/services" className={navButtonClass}>Our Services</Link></li>
//         <li><Link to="/search" className={navButtonClass}>Contact Us</Link></li>
//         <li><Link to="/account" className={navButtonClass}>Login</Link></li>
//       </ul>
//     </nav>
//   );
// }


// import { Link } from "react-router-dom";
// import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

// export default function Navbar() {
//   const navButtonClass =
//   "bg-[#02588F] text-white px-3 py-2 rounded-xl border border-gray-300 " +
//   "hover:bg-[#068479] active:translate-y-[2px] transition duration-200 text-xs sm:text-sm border border-yellow-500 rounded px-3 py-1  relative px-4 py-2 text-white bg-[#00BFFF] rounded-full font-semibold hover:top-[1px] hover:shadow-[0_2px_0_#009ACD] transition-all duration-150 shadow-[0_4px_0_#009ACD]";

//   return (
//     <nav className="bg-white shadow-md w-full sticky top-0 z-50 px-3 sm:px-4 py-2 pt-4 pb-4">
//       <div className="flex flex-wrap justify-between items-center gap-2 text-gray-700 text-xs sm:text-sm">

//         {/* Left: Contact Info */}
//         <div className="flex flex-wrap items-center gap-3 flex-grow sm:flex-grow-0">
//           <div className="flex items-center space-x-1">
//             <FaEnvelope className="text-[#02588F]" />
//             <span>info@example.com</span>
//           </div>
//           <div className="flex items-center space-x-1">
//             <FaPhoneAlt className="text-[#02588F]" />
//             <span>+91 98765 43210</span>
//           </div>
//           <div className="flex items-center space-x-1">
//             <FaMapMarkerAlt className="text-[#02588F]" />
//             <span>Pune</span>
//           </div>
//         </div>

//         {/* Right: Navigation Links */}
//         <div className="flex flex-wrap justify-center sm:justify-end items-center gap-2 mt-2 sm:mt-0">
//           <Link to="/" className={navButtonClass}>Home</Link>
//           <Link to="/about" className={navButtonClass}>About Us</Link>
//           <Link to="/values" className={navButtonClass}>How It Works</Link>
//           <Link to="/services" className={navButtonClass}>Our Services</Link>
//           <Link to="/search" className={navButtonClass}>Contact Us</Link>
//           <Link to="/account" className={navButtonClass}>Login</Link>
//         </div>

//       </div>
//     </nav>
//   );
// }

import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navButtonClass =
  "bg-[#02588F] text-white px-3 py-2 rounded-xl border border-gray-300 " +
  "hover:bg-[#068479] active:translate-y-[2px] transition duration-200 text-xs sm:text-sm border border-yellow-500 rounded px-3 py-1  relative px-4 py-2 text-white bg-[#00BFFF] rounded-full font-semibold hover:top-[1px] hover:shadow-[0_2px_0_#009ACD] transition-all duration-150 shadow-[0_4px_0_#009ACD]";

  return (
    <nav className="bg-white shadow-md w-full sticky top-0 z-50 px-3 sm:px-4 py-2 pt-4 pb-4">
      <div className="flex flex-wrap justify-between items-center gap-2 text-gray-700 text-xs sm:text-sm">

        {/* Left: Contact Info */}
        <div className="flex flex-wrap items-center gap-3 flex-grow sm:flex-grow-0">
          <div className="flex items-center space-x-1">
            <FaEnvelope className="text-[#02588F]" />
            <span>info@example.com</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaPhoneAlt className="text-[#02588F]" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaMapMarkerAlt className="text-[#02588F]" />
            <span>Pune</span>
          </div>
        </div>

        {/* Hamburger icon for mobile */}
        <div className="sm:hidden ml-auto">
          <button onClick={toggleMenu} className="text-[#02588F] text-xl focus:outline-none">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Right: Navigation Links */}
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col sm:flex sm:flex-row sm:items-center gap-2 mt-2 sm:mt-0 text-center w-full sm:w-auto`}
        >
          <Link to="/" className={navButtonClass} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className={navButtonClass} onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/values" className={navButtonClass} onClick={() => setMenuOpen(false)}>How It Works</Link>
          <Link to="/services" className={navButtonClass} onClick={() => setMenuOpen(false)}>Our Services</Link>
          <Link to="/search" className={navButtonClass} onClick={() => setMenuOpen(false)}>Contact Us</Link>
          <Link
  to="/account"
  className={`${navButtonClass} hidden sm:inline-block`}
  onClick={() => setMenuOpen(false)}
>
  Login
</Link>

        </div>
      </div>
    </nav>
  );
}