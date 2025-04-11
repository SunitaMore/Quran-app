import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Button,
  Badge,
} from '../components/ui-components';
import { Clock, BookOpen, Users, Star } from 'lucide-react';
import webDevImg from '../assets/images/web_dev.png';
import mobdevImg from '../assets/images/mobile_dev.png';
import pythonImg from '../assets/images/python.png';
import devopsImg from '../assets/images/devops.png';
import javaImg from '../assets/images/java.png';
import awsImg from '../assets/images/aws.png';
import reactImg from '../assets/images/react.png';
import reactNativeImg from '../assets/images/react_native.png';
import azureImg from '../assets/images/azure.png';
import hrImg from '../assets/images/hr.png';
import personalityImg from '../assets/images/personality.png';
import communicationImg from '../assets/images/communication.png';
import recruitmentImg from '../assets/images/recruitment.png';
import meanStackImg from '../assets/images/mean.png';
import mernStackImg from '../assets/images/mern.png';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const itCourses = [

  {
    id: "mern stack development",
    title: "MERN Stack Development",
    description: "Learn to develop full-stack applications with MongoDB, Express.js, React, and Node.js.",
    image: mernStackImg, // Make sure to import or define this image
    category: "Full Stack",
    duration: "10 weeks",
    lessons: 30,
    students: "2.9k+",
    rating: 4.9,
    price: "See More",
  },
  {
    id: "mean stack development",
    title: "MEAN Stack Development",
    description: "Build full-stack applications using MongoDB, Express.js, Angular, and Node.js.",
    image: meanStackImg, // Make sure to import or define this image
    category: "Full Stack",
    duration: "10 weeks",
    lessons: 30,
    students: "2.4k+",
    rating: 4.8,
    price: "See More",
  },
  {
    id: "python developer",
    title: "Python Developer",
    description: "Learn Python for web, data, and automation.",
    image: pythonImg,
    category: "Python",
    duration: "6 weeks",
    lessons: 18,
    students: "3.2k+",
    rating: 4.9,
     price: "See More",
  },
 
  
  {
    id: "java programming",
          title: "Java Programming",
          description: "Learn core Java programming and object-oriented concepts for real-world applications.",
          image: javaImg, // Add this image to your assets
          category: "Java",
          duration: "8 weeks",
          lessons: 26,
          students: "2.3k+",
          rating: 4.7,
          price: "See More",
        },
  {
    id: "web-development",
    title: "Web Development",
    description: "Learn HTML, CSS, and JS to build modern websites.",
    image: webDevImg,
    category: "Development",
    duration: "8 weeks",
    lessons: 24,
    students: "2.5k+",
    rating: 4.8,
    price: "See More",
  },
  {
    id: "mobile development",
    title: "Mobile Development",
    description: "Build advanced apps for iOS & Android.",
    image: mobdevImg,
    category: "Mobile App",
    duration: "10 weeks",
    lessons: 32,
    students: "1.8k+",
    rating: 4.7,
    price: "See More",
  },
  
  {
    id: "devops",
    title: "DevOps",
    description: "Master DevOps tools & CI/CD pipelines.",
    image: devopsImg,
    category: "DevOps",
    duration: "8 weeks",
    lessons: 22,
    students: "1.5k+",
    rating: 4.6,
    price: "See More",
  },
  
        {
          id: "aws cloud essentials",
          title: "AWS Cloud Essentials",
          description: "Understand the basics of AWS cloud services and infrastructure deployment.",
          image: awsImg,
          category: "AWS",
          duration: "6 weeks",
          lessons: 20,
          students: "2.1k+",
          rating: 4.8,
          price: "See More",
        },
        {
          id: "react development",
          title: "React Development",
          description: "Build dynamic web apps using React, hooks, and modern component-based architecture.",
          image: reactImg,
          category: "React",
          duration: "7 weeks",
          lessons: 28,
          students: "3.0k+",
          rating: 4.9,
          price: "See More",
        },
        {
          id: "react native",
          title: "React Native",
          description: "Create cross-platform mobile apps using React Native and Expo framework.",
          image: reactNativeImg,
          category: "React Native",
          duration: "8 weeks",
          lessons: 25,
          students: "2.7k+",
          rating: 4.8,
          price: "See More",
        },
        {
          id: "microsoft azure",
          title: "Microsoft Azure",
          description: "Learn to use Azure for cloud computing, virtual machines, and scalable deployments.",
          image: azureImg,
          category: "Azure",
          duration: "6 weeks",
          lessons: 22,
          students: "1.9k+",
          rating: 4.7,
          price: "See More",
        },
       
];

const nonItCourses = [
  {
    id: "hr-essentials",
    title: "HR Essentials",
    description: "Understand HR hiring, compliance & employee relations.",
    image: hrImg,
    category: "HR",
    duration: "6 weeks",
    lessons: 20,
    students: "2.1k+",
    rating: 4.7,
    price: "See More",
  },
  {
    id: "personality development",
    title: "Personality Development",
    description: "Boost confidence, communication, and leadership.",
    image: personalityImg,
    category: "Soft Skills",
    duration: "5 weeks",
    lessons: 15,
    students: "3.0k+",
    rating: 4.8,
    price: "See More",
  },
  {
    id: "office communication",
    title: "Office Communication",
    description: "Master emails, meetings & workplace interactions.",
    image: communicationImg,
    category: "Communication",
    duration: "4 weeks",
    lessons: 12,
    students: "1.7k+",
    rating: 4.6,
    price: "See More",
  },
  {
    id: "recruitment techniques",
    title: "Recruitment Techniques",
    description: "Learn sourcing, screening & interviews.",
    image: recruitmentImg,
    category: "Recruitment",
    duration: "6 weeks",
    lessons: 18,
    students: "2.4k+",
    rating: 4.7,
    price: "See More",
  },
];


const FeaturedCourse = () => {
  const [activeTab, setActiveTab] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const allCourses = [...itCourses, ...nonItCourses];

  const getFilteredCourses = () => {
    if (activeTab === "IT") return itCourses;
    if (activeTab === "Non-IT") return nonItCourses;
    return allCourses;
  };

  const filteredCourses = getFilteredCourses();

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="course" className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6" ref={ref}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Featured Courses
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Explore our most popular courses and start your learning journey today.
            </p>
          </div>

          {/* Tabs */}
          <div className="relative inline-flex p-1 bg-gray-200 dark:bg-gray-800 rounded-full mt-6 shadow-inner">
            {["All", "IT", "Non-IT"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative z-10 px-5 py-2 text-sm font-semibold cursor-pointer rounded-full transition-all duration-300 ease-in-out focus:outline-none ${
                  activeTab === tab
                    ? "bg-white text-blue-600 shadow-md"
                    : "text-gray-600 hover:text-blue-500 hover:bg-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Animated Course Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <Card className="overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer">
                <div className="relative">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="object-cover w-full h-48"
                  />
                  <Badge className="absolute top-2 right-2 bg-white text-black border border-gray-300 rounded px-2 py-0.5 text-xs font-medium shadow-sm">
                    {course.category}
                  </Badge>
                </div>

                <CardHeader className="p-4 bg-white">
                  <CardTitle className="line-clamp-1">{course.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{course.description}</CardDescription>
                </CardHeader>

                <CardContent className="p-4 pt-0 bg-white">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      <span>{course.lessons} lessons</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 flex flex-col items-start justify-between bg-white">
  {/* Rating Section - Move above the price */}
  <div className="flex items-center mb-2">
    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
    <Star className="h-4 w-4 fill-gray-200 text-gray-200" />
    <span className="ml-2 text-sm font-medium">{course.rating}</span>
  </div>

  {/* Buttons - Apply Now and See More on the same line */}
  <div className="flex items-center gap-3">
    {/* If price field is "See More", render a Link to the CourseDetails page */}
    {course.price === "See More" ? (
      <Link
        to={`/course/${course.id}`}
        className="bg-blue-500 text-white text-sm px-2 py-1 pt-1 rounded-full hover:bg-blue-900 transition duration-300"
      >
        See More..
      </Link>
    ) : (
      <span className="font-bold">{course.price}</span>
    )}

    {/* Apply Now Button */}
    <NavLink
    to="/applynow"
      onClick={() => console.log("Apply Now clicked")}
      className=" ml-10 bg-green-500 text-white text-sm px-2 py-1 pt-1 rounded-full hover:bg-green-900 transition duration-300"
    >
      Apply Now
    </NavLink>
  </div>
</CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourse;
