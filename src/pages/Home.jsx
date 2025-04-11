import FeaturedCourse from "../components/FeaturedCourse";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui-components";
import { Button } from "../components/ui-components";

import { Badge } from "../components/ui-components";

import {
  BookOpen,
  Clock,
  GraduationCap,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  UserIcon,
} from "lucide-react";

import heroPage from "../assets/images/hero_page.png"; 
import { Element } from "react-scroll";
import Testimonials from "../components/Testimonials";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ContactUs from "../components/ContactUs";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import PersontOne from "../assets/images/person1.jpg";
import PersonTwo from "../assets/images/person2.jpg";
import PersonThree from "../assets/images/person3.jpg";
import { motion } from "framer-motion";



const features = [
  {
    title: "Expert Instructors",
    description: "Learn from industry leaders with real-world experience.",
    icon: <UserIcon className="h-6 w-6 text-primary" />,
  },
  {
    title: "Flexible Learning",
    description: "Access courses anytime, anywhere, on any device.",
    icon: <Clock className="h-6 w-6 text-primary" />,
  },
  {
    title: "Recognized Certificates",
    description: "Boost your resume with industry-recognized certifications.",
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
  },
];

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const sectionId = location.state?.scrollTo;

    if (sectionId) {
      const scrollToSection = () => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          navigate(location.pathname, { replace: true, state: {} });
        } else {
          setTimeout(scrollToSection, 100);
        }
      };
      scrollToSection();
    }
  }, [location, navigate]);

  const handleScrollTo = (sectionId) => {
    navigate("./../components/", { state: { scrollTo: sectionId } });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Element name="home">
          <section
            id="home"
            className="w-full min-h-screen flex items-center bg-white"
          >
            <div className="container mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Text Content */}
                <motion.div
                  className="flex flex-col justify-center space-y-6 ml-24"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="space-y-4">
                    <Badge className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors" variant="secondary">
                      ✨ New Courses Available
                    </Badge>
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none">
                      IT COURSE
                    </h1>
                    <p className="text-xl text-foreground/80">
                      "Build. Code. Lead. Your IT Journey Starts Here."
                    </p>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                      Start, switch, or advance your career with thousands of courses from world-class instructors and companies.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 min-[400px]:flex-row pt-2 justify-between mx-10">
                    <NavLink to="/courses" className=" h-12 text-lg shadow-lg hover:bg-gray-300 p-4 flex items-center rounded-xl">
                      Explore Courses
                    </NavLink>
                    <Link to="/testimonials" onClick={() => handleScrollTo("testimonials")} className=" h-12 text-lg shadow-lg bg-black text-white hover:text-black hover:bg-white p-4 flex items-center rounded-xl ">
                      Success Stories
                    </Link>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 pt-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Expert instructors</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Flexible learning</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Industry certificates</span>
                    </div>
                  </div>
                </motion.div>

                {/* Full-Size Image */}
                <motion.div
                  className="relative h-full w-full"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div
                    style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)" }}
                    className="relative h-[500px] md:h-[600px] lg:h-[750px] w-full rounded-xl overflow-hidden shadow-2xl"
                  >
                    <img
                      src={heroPage}
                      alt="Students learning online"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background/10 to-background/70"></div>
                  </div>

                  {/* Floating Card */}
                  <motion.div
                    className="absolute bottom-6 right-6 bg-background/90 backdrop-blur-sm p-4 rounded-lg shadow-xl border text-white bg-black"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        <img src={PersontOne} className="w-8 h-8 rounded-full border-2 border-background" alt="Happy student 1" />
                        <img src={PersonTwo} className="w-8 h-8 rounded-full border-2 border-background" alt="Happy student 2" />
                        <img src={PersonThree} className="w-8 h-8 rounded-full border-2 border-background" alt="Happy student 3" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Join 10k+ learners</p>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm">4.9/5 (2k reviews)</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>
        </Element>
        <Element name="course">
          <FeaturedCourse />
        </Element>

        <section id="features" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Why Choose IT Course
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Our platform offers everything you need to succeed in your learning journey.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.2 }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground mt-2">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Element name="testimonials">
          <Testimonials />
        </Element>

          {/* CTA */}
          <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Start Learning?
                </h2>
                <p className="max-w-[900px] md:text-xl">
                  Join thousands of students already learning on our platform.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Us */}
        <Element name="testimonials">
          {" "}
          <ContactUs />{" "}
        </Element>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6" />
            <span className="text-xl font-bold">IT Course</span>
          </div>

          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} IT Course. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}