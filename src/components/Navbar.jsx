

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaEnvelope,
//   FaPhoneAlt,
//   FaMapMarkerAlt,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const navButtonClass =
//     "bg-[#02588F] text-white px-12 py-2 rounded-xl border border-gray-300  " +
//     "hover:bg-[#068479] active:translate-y-[2px] transition duration-200 text-xs sm:text-sm border border-yellow-500 rounded px-3 py-1 relative px-4 py-2 text-white bg-[#00BFFF] rounded-full font-semibold hover:top-[1px] hover:shadow-[0_2px_0_#009ACD] transition-all duration-150 shadow-[0_4px_0_#009ACD]";

//   return (
//     <nav className="bg-white shadow-md w-full sticky top-0 z-50 ml-3">
//       <div className="flex justify-between items-center px-4 py-2">
//         {/* Left: Logo spanning the full height */}
//         <div className="flex-shrink-0">
//           <img src="/logo.png" alt="Logo" className="h-22 w-auto rounded-xl" />
//         </div>

//         {/* Right: Contact Info (top) and Navbar (bottom) in vertical stack */}
//         <div className="flex flex-col justify-between flex-grow ml-4 h-20">
//           {/* Top Row: Contact Info */}
//           <div className="flex justify-end items-center space-x-6 text-gray-700 text-xs sm:text-sm mr-3">
//             <div className="flex items-center space-x-1 ">
//               <FaEnvelope className="text-[#02588F]" />
//               <span>info@example.com</span>
//             </div>

//             <div className="flex items-center space-x-1">
//               <FaPhoneAlt className="text-[#02588F]" />
//               <span>+91 98765 43210</span>
//             </div>

//             <div className="flex items-center space-x-1">
//               <FaMapMarkerAlt className="text-[#02588F]" />
//               <span>Pune, India</span>
//             </div>
//           </div>

//           {/* Bottom Row: Navbar */}
//           <div className="flex justify-end items-center gap-2 text-gray-700 text-xs sm:text-sm mt-1">
//             {/* Hamburger icon for mobile */}
//             <div className="sm:hidden">
//               <button
//                 onClick={toggleMenu}
//                 className="text-[#02588F] text-xl focus:outline-none"
//               >
//                 {menuOpen ? <FaTimes /> : <FaBars />}
//               </button>
//             </div>

//             {/* Navigation Links */}
//             <div
//               className={`${
//                 menuOpen ? "flex" : "hidden"
//               } flex-col sm:flex sm:flex-row sm:items-center gap-8 mt-2 sm:mt-0 text-center w-full sm:w-auto mb-1.5`}
//             >
//               <Link
//                 to="/"
//                 className={navButtonClass}
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Home
//               </Link>
//               <Link
//                 to="/about"
//                 className={navButtonClass}
//                 onClick={() => setMenuOpen(false)}
//               >
//                 About Us
//               </Link>
//               <Link
//                 to="/values"
//                 className={navButtonClass}
//                 onClick={() => setMenuOpen(false)}
//               >
//                 How It Works
//               </Link>
//               <Link
//                 to="/services"
//                 className={navButtonClass}
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Our Services
//               </Link>
//               <Link
//                 to="/search"
//                 className={navButtonClass}
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Contact Us
//               </Link>
//               <Link
//                 to="/account"
//                 className={`${navButtonClass} hidden sm:inline-block`}
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Login
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navButtonClass =
    "bg-[#02588F] text-white px-12 py-2 rounded-xl border border-gray-300 mb-2 " + "py-2 px-4 sm:px-8 md:px-12 " +     // More horizontal padding on bigger screens
    "w-full sm:w-auto " +               // Full width on mobile, auto width on sm+ 
    "hover:bg-[#068479] active:translate-y-[2px] transition duration-200 text-xs sm:text-sm border border-yellow-500 rounded px-3 py-1 relative px-4 py-2 text-white bg-[#00BFFF] rounded-full font-semibold hover:top-[1px] hover:shadow-[0_2px_0_#009ACD] transition-all duration-150 shadow-[0_4px_0_#009ACD]";

  return (
    <>
     <nav className="bg-white shadow-md w-full sticky top-0 z-50 ml-3">
  <div className="flex justify-between items-center px-4 py-2">
    {/* Left: Logo */}
    <div className="flex-shrink-0 flex items-center">
      <img src="/logo.png" alt="Logo" className="h-22 w-auto rounded-xl" />

      {/* Mobile Contact Info: visible only on mobile */}
      <div className="flex flex-col ml-4 text-gray-700 text-xs space-y-1 sm:hidden">
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
          <span>Pune, India</span>
        </div>
      </div>
    </div>

    {/* Right side: Contact info for desktop and nav */}
    <div className="flex flex-col justify-between flex-grow ml-4 h-20">
      {/* Desktop Contact Info: hidden on mobile, visible on desktop */}
      <div className="hidden sm:flex justify-end items-center space-x-6 text-gray-700 text-xs sm:text-sm mr-3">
        <div className="flex items-center space-x-1 ">
          <FaEnvelope className="text-[#02588F]" />
          <span>info@example.com</span>
        </div>

        <div className="flex items-center space-x-1">
          <FaPhoneAlt className="text-[#02588F]" />
          <span>+91 98765 43210</span>
        </div>

        <div className="flex items-center space-x-1">
          <FaMapMarkerAlt className="text-[#02588F]" />
          <span>Pune, India</span>
        </div>
      </div>

      {/* Navbar Links and Hamburger */}
      <div className="flex justify-end items-center gap-2 text-gray-700 text-xs sm:text-sm mt-1">
        {/* Hamburger icon for mobile */}
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#02588F] text-xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation Links for desktop */}
        <div className="hidden sm:flex sm:flex-row sm:items-center gap-8 text-center w-auto">
          <Link to="/" className={navButtonClass}>
            Home
          </Link>
          <Link to="/about" className={navButtonClass}>
            About Us
          </Link>
          <Link to="/values" className={navButtonClass}>
            How It Works
          </Link>
          <Link to="/services" className={navButtonClass}>
            Our Services
          </Link>
          <Link to="/search" className={navButtonClass}>
            Contact Us
          </Link>
          <Link to="/account" className={`${navButtonClass} inline-block`}>
            Login
          </Link>
        </div>
      </div>
    </div>
  </div>
</nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
  <div
    className="fixed top-0 left-0 w-full h-full bg-white z-[60] flex flex-col px-4 pt-4"
    aria-modal="true"
    role="dialog"
    tabIndex={-1}
  >
    {/* Top Section: Logo and Contact Info */}
    <div className="flex justify-between items-start mb-6">
      {/* Logo */}
      <img src="/logo.png" alt="Logo" className="h-16 w-auto rounded-xl" />

      {/* Contact Info */}
      <div className="flex flex-col text-right text-xs text-gray-700 space-y-2">
        <div className="flex items-center space-x-1 justify-end">
          <FaEnvelope className="text-[#02588F]" />
          <span>info@example.com</span>
        </div>
        <div className="flex items-center space-x-1 justify-end">
          <FaPhoneAlt className="text-[#02588F]" />
          <span>+91 98765 43210</span>
        </div>
        <div className="flex items-center space-x-1 justify-end">
          <FaMapMarkerAlt className="text-[#02588F]" />
          <span>Pune, India</span>
        </div>
      </div>
    </div>

    {/* Navigation Links */}
    <div className="flex flex-col items-center justify-center gap-4 text-center text-sm">
      <Link to="/" className={navButtonClass} onClick={() => setMenuOpen(false)}>
        Home
      </Link>
      <Link to="/about" className={navButtonClass} onClick={() => setMenuOpen(false)}>
        About Us
      </Link>
      <Link to="/values" className={navButtonClass} onClick={() => setMenuOpen(false)}>
        How It Works
      </Link>
      <Link to="/services" className={navButtonClass} onClick={() => setMenuOpen(false)}>
        Our Services
      </Link>
      <Link to="/search" className={navButtonClass} onClick={() => setMenuOpen(false)}>
        Contact Us
      </Link>
      <Link to="/account" className={navButtonClass} onClick={() => setMenuOpen(false)}>
        Login
      </Link>
    </div>
  </div>


      )}
    </>
  );
}
