import React from "react";

const Navbar = () => {
  return (
    <nav className="hidden md:flex gap-6">
      <a href="#courses" className="text-sm font-medium hover:text-primary">
        Home
      </a>
      <a href="#courses" className="text-sm font-medium hover:text-primary">
        About us
      </a>
      <a href="#courses" className="text-sm font-medium hover:text-primary">
        Courses
      </a>
      <a href="#courses" className="text-sm font-medium hover:text-primary">
        Hire For Us
      </a>
      <a href="#courses" className="text-sm font-medium hover:text-primary">
        Hand Projects
      </a>
      <a href="#features" className="text-sm font-medium hover:text-primary">
        Blog
      </a>
      <a href="#courses" className="text-sm font-medium hover:text-primary">
        Faculty
      </a>
      
      <a
        href="#testimonials"
        className="text-sm font-medium hover:text-primary"
      >
        Testimonials
      </a>
      <a href="#pricing" className="text-sm font-medium hover:text-primary">
        Pricing
      </a>
    </nav>
  );
};

export default Navbar;
