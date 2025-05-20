
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
//     "bg-[#02588F] text-white px-3 py-2 rounded-md border border-gray-300 " +
//     "shadow-md hover:bg-[#068479] active:translate-y-[2px] transition duration-200 text-xs md:text-sm";

//   return (
//     <nav className="bg-white shadow-md w-full sticky top-0 z-50">
//       {/* Top contact info for all sizes */}
//       <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center px-4 py-2 space-y-2 sm:space-y-0 sm:space-x-4 text-[12px] sm:text-sm text-gray-700">
//         <div className="flex items-center space-x-1">
//           <FaEnvelope className="text-[#02588F]" />
//           <span>info@example.com</span>
//         </div>
//         <div className="flex items-center space-x-1">
//           <FaPhoneAlt className="text-[#02588F]" />
//           <span>+91 98765 43210</span>
//         </div>
//         <div className="flex items-center space-x-1">
//           <FaMapMarkerAlt className="text-[#02588F]" />
//           <span>New Delhi, India</span>
//         </div>
//       </div>

//       {/* Navigation links */}
//       <div className="flex flex-wrap justify-center sm:justify-evenly md:justify-end items-center px-2 sm:px-4 py-2 gap-2">
//         <Link to="/" className={navButtonClass}>Home</Link>
//         <Link to="/about" className={navButtonClass}>About Us</Link>
//         <Link to="/values" className={navButtonClass}>How It Works</Link>
//         <Link to="/services" className={navButtonClass}>Our Services</Link>
//         <Link to="/search" className={navButtonClass}>Contact Us</Link>
//         <Link to="/account" className={navButtonClass}>Login</Link>
//       </div>
//     </nav>
//   );
// }

import { Link } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Navbar() {
  const navButtonClass =
    "bg-[#02588F] text-white px-3 py-2 rounded-md border border-gray-300 " +
    "shadow-md hover:bg-[#068479] active:translate-y-[2px] transition duration-200 text-xs sm:text-sm";

  return (
    <nav className="bg-white shadow-md w-full sticky top-0 z-50 px-3 sm:px-4 py-2">
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
            <span>New Delhi, India</span>
          </div>
        </div>

        {/* Right: Navigation Links */}
        <div className="flex flex-wrap justify-center sm:justify-end items-center gap-2 mt-2 sm:mt-0">
          <Link to="/" className={navButtonClass}>Home</Link>
          <Link to="/about" className={navButtonClass}>About Us</Link>
          <Link to="/values" className={navButtonClass}>How It Works</Link>
          <Link to="/services" className={navButtonClass}>Our Services</Link>
          <Link to="/search" className={navButtonClass}>Contact Us</Link>
          <Link to="/account" className={navButtonClass}>Login</Link>
        </div>

      </div>
    </nav>
  );
}

