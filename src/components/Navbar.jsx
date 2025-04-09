import React from "react";
import { NavLink } from "react-router-dom";

import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleScrollTo = (sectionId) => {
    navigate("/", { state: { scrollTo: sectionId } });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between ">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-xl font-bold cursor-pointer px-3 py-1 rounded hover:bg-blue-100 transition"
          onClick={() => handleScrollTo("home")}
          >IT course</Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link smooth={true} duration={500} offset={-70}
            to="/"
            className="text-sm font-medium text-muted-foreground cursor-pointer hover:text-blue-600 transition duration-300"
            onClick={() => handleScrollTo("home")}
          >
            Home
          </Link>
          
          <NavLink
            to="/aboutus"
             className="text-sm font-medium text-muted-foreground hover:text-blue-600 transition duration-300"
          >
            About us
          </NavLink>
          <Link to="course" smooth={true} duration={500} offset={-70}
           className="text-sm font-medium text-muted-foreground hover:text-blue-600 cursor-pointer transition duration-300"
           onClick={() => handleScrollTo("course")}
          >
            Course
          </Link>
          <NavLink
            to="/hirefromus"
            className="text-sm font-medium text-muted-foreground hover:text-blue-600 transition duration-300"
          >
            Hire From Us
          </NavLink>
          <NavLink
            to="/handproject"
             className="text-sm font-medium text-muted-foreground hover:text-blue-600 transition duration-300"
          >
            Training Projects
          </NavLink>
          <NavLink
            to="/blog"
            className="text-sm font-medium text-muted-foreground hover:text-blue-600 transition duration-300"
          >
            Blog
          </NavLink>
          <NavLink
            to="/faculty"
            className="text-sm font-medium text-muted-foreground hover:text-blue-600 transition duration-300"
          >
            Faculty
          </NavLink>

          <Link smooth={true} duration={500} offset={-70}
            to="testimonials"
           className="text-sm font-medium text-muted-foreground cursor-pointer hover:text-blue-600 transition duration-300"
            onClick={() => handleScrollTo("testimonials")}
          >
            Testimonials
          </Link>
          <Link
            to="/contactus"
            className="text-sm font-medium text-muted-foreground cursor-pointer hover:text-blue-600 transition duration-300"
            onClick={() => handleScrollTo("contactus")}
          >
            Contact Us
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <NavLink
            to="/applynow"
            className="text-sm font-medium hover:text-primary mr-4 "
          >
            Apply Now
          </NavLink>
          
        </div>
      </div>
    </header>
  );
};

export default Navbar;
