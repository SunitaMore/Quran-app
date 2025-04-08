import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../components/ui-components";
const Navbar = () => {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">IT course</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <NavLink
              to="/courses"
              className="text-sm font-medium hover:text-primary"
            >
              Home
            </NavLink>
            <NavLink
              to="/courses"
              className="text-sm font-medium hover:text-primary"
            >
              About us
            </NavLink>
            <NavLink
              to="/courses"
              className="text-sm font-medium hover:text-primary"
            >
              Courses
            </NavLink>
            <NavLink
              to="/courses"
              className="text-sm font-medium hover:text-primary"
            >
              Hire For Us
            </NavLink>
            <NavLink
              to="/courses"
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
              to="/courses"
              className="text-sm font-medium hover:text-primary"
            >
              Faculty
            </NavLink>

            <NavLink
              to="/testimonials"
              className="text-sm font-medium hover:text-primary"
            >
              Testimonials
            </NavLink>
            <NavLink
              to="/pricing"
              className="text-sm font-medium hover:text-primary"
            >
              Contact Us
            </NavLink>
          </nav>
          <div className="flex items-center gap-4">
            <NavLink to="/login" className="text-sm font-medium hover:text-primary">
              Log in
            </NavLink>
            <Button>Get Started</Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
