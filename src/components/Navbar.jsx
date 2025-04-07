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
          <NavLink to="/" className="text-xl font-bold cursor-pointer">IT course</NavLink>
        </div>
        <nav className="hidden md:flex gap-6">
          <NavLink smooth={true} duration={500} offset={-70}
            to="/"
            className="text-sm font-medium hover:text-primary cursor-pointer"
          >
            Home
          </NavLink>
          
          <NavLink
            to="/aboutus"
            className="text-sm font-medium hover:text-primary"
          >
            About us
          </NavLink>
          <Link to="course" smooth={true} duration={500} offset={-70}
           className="text-sm font-medium hover:text-primary cursor-pointer"
           onClick={() => handleScrollTo("course")}
          >
            Course
          </Link>
          <NavLink
            to="/hireforus"
            className="text-sm font-medium hover:text-primary"
          >
            Hire For Us
          </NavLink>
          <NavLink
            to="/handproject"
            className="text-sm font-medium hover:text-primary"
          >
            Hand Projects
          </NavLink>
          <NavLink
            to="/features"
            className="text-sm font-medium hover:text-primary"
          >
            Blog
          </NavLink>
          <NavLink
            to="/faculty"
            className="text-sm font-medium hover:text-primary"
          >
            Faculty
          </NavLink>

          <Link smooth={true} duration={500} offset={-70}
            to="testimonials"
            className="text-sm font-medium hover:text-primary cursor-pointer"
            onClick={() => handleScrollTo("testimonials")}
          >
            Testimonials
          </Link>
          <Link
            to="/contactus"
            className="text-sm font-medium hover:text-primary cursor-pointer"
            onClick={() => handleScrollTo("contactus")}
          >
            Contact Us
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <NavLink
            to="/login"
            className="text-sm font-medium hover:text-primary mr-4 "
          >
            Log in
          </NavLink>
          
        </div>
      </div>
    </header>
  );
};

export default Navbar;
