// import React from 'react'
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui-components";
// import { Button } from "../components/ui-components";
// import { Badge } from "../components/ui-components";
// import { BookOpen, Clock, GraduationCap, Users, CheckCircle, ArrowRight, Star } from "lucide-react"

// //IT
// import webDevImg from '../assets/images/web_dev.png';
// import mobdevImg from '../assets/images/mobile_dev.png';
// import pythonImg from '../assets/images/python.png';
// import devopsImg from '../assets/images/devops.png';
// import javaImg from '../assets/images/java.png';
// import awsImg from '../assets/images/aws.png';
// import reactImg from '../assets/images/react.png';
// import reactNativeImg from '../assets/images/react_native.png';
// import azureImg from '../assets/images/azure.png';

// //non IT 
// import hrImg from '../assets/images/hr.png';
// import personalityImg from '../assets/images/personality.png';
// import communicationImg from '../assets/images/communication.png';
// import recruitmentImg from '../assets/images/recruitment.png';





// // Sample data
// const courses = [
//     {
//       title: "Web Development",
//       description: "Learn the fundamentals of HTML, CSS, and JavaScript to build modern websites.",
//       image: webDevImg,
//       category: "Development",
//       duration: "8 weeks",
//       lessons: 24,
//       students: "2.5k+",
//       rating: 4.8,
//       price: "",
//     },
//     {
//       title: "Mobile Development",
//       description: "Designing and building advanced applications for the iOS and Android platforms.",
//       image: mobdevImg,
//       category: "Mobile App",
//       duration: "10 weeks",
//       lessons: 32,
//       students: "1.8k+",
//       rating: 4.7,
//       price: "",
//     },
//     {
//       title: "Python Developer",
//       description: "Learn Python from scratch — a powerful, beginner-friendly language used for web development, data science, automation, and more.",
//       image: pythonImg,
//       category: "Python",
//       duration: "6 weeks",
//       lessons: 18,
//       students: "3.2k+",
//       rating: 4.9,
//       price: "",
//     },
//     {
//       title: "DevOps",
//       description: "Master DevOps tools and practices to streamline software development, automate workflows, and enable continuous delivery.",
//       image: devopsImg,
//       category: "DevOps",
//       duration: "8 weeks",
//       lessons: 22,
//       students: "1.5k+",
//       rating: 4.6,
//       price: "",
//     },
//     {
//       title: "Java Programming",
//       description: "Learn core Java programming and object-oriented concepts for real-world applications.",
//       image: javaImg, // Add this image to your assets
//       category: "Java",
//       duration: "8 weeks",
//       lessons: 26,
//       students: "2.3k+",
//       rating: 4.7,
//       price: "",
//     },
//     {
//       title: "AWS Cloud Essentials",
//       description: "Understand the basics of AWS cloud services and infrastructure deployment.",
//       image: awsImg,
//       category: "AWS",
//       duration: "6 weeks",
//       lessons: 20,
//       students: "2.1k+",
//       rating: 4.8,
//       price: "",
//     },
//     {
//       title: "React Development",
//       description: "Build dynamic web apps using React, hooks, and modern component-based architecture.",
//       image: reactImg,
//       category: "React",
//       duration: "7 weeks",
//       lessons: 28,
//       students: "3.0k+",
//       rating: 4.9,
//       price: "",
//     },
//     {
//       title: "React Native",
//       description: "Create cross-platform mobile apps using React Native and Expo framework.",
//       image: reactNativeImg,
//       category: "React Native",
//       duration: "8 weeks",
//       lessons: 25,
//       students: "2.7k+",
//       rating: 4.8,
//       price: "",
//     },
//     {
//       title: "Microsoft Azure",
//       description: "Learn to use Azure for cloud computing, virtual machines, and scalable deployments.",
//       image: azureImg,
//       category: "Azure",
//       duration: "6 weeks",
//       lessons: 22,
//       students: "1.9k+",
//       rating: 4.7,
//       price: "",
//     },
//     {
//       title: "HR Essentials",
//       description: "Understand core HR concepts including hiring, compliance, and employee relations.",
//       image: hrImg,
//       category: "HR",
//       duration: "6 weeks",
//       lessons: 20,
//       students: "2.1k+",
//       rating: 4.7,
//       price: "",
//     },
//     {
//       title: "Personality Development",
//       description: "Boost your confidence, communication skills, and professional presence.",
//       image: personalityImg,
//       category: "Soft Skills",
//       duration: "5 weeks",
//       lessons: 15,
//       students: "3.0k+",
//       rating: 4.8,
//       price: "",
//     },
//     {
//       title: "Office Communication",
//       description: "Master email etiquette, meeting skills, and effective workplace communication.",
//       image: communicationImg,
//       category: "Communication",
//       duration: "4 weeks",
//       lessons: 12,
//       students: "1.7k+",
//       rating: 4.6,
//       price: "",
//     },
//     {
//       title: "Recruitment Techniques",
//       description: "Learn sourcing, screening, and interview techniques to find top talent.",
//       image: recruitmentImg,
//       category: "Recruitment",
//       duration: "6 weeks",
//       lessons: 18,
//       students: "2.4k+",
//       rating: 4.7,
//       price: "",
//     },
    
//   ]

  
// const FeaturedCourse = () => {
//   return (
//     <div>{/* Featured Courses */}
//     <section id="courses" className="w-full py-12 md:py-24 bg-muted/50">
//       <div className="container px-4 md:px-6">
//         <div className="flex flex-col items-center justify-center space-y-4 text-center">
//           <div className="space-y-2">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Courses</h2>
//             <p className="max-w-[900px] text-muted-foreground md:text-xl">
//               Explore our most popular courses and start your learning journey today.
//             </p>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
//           {courses.map((course, index) => (
//             <Card key={index} className="overflow-hidden">
//               <div className="relative">
//                 <img
//                   src={course.image || "/placeholder.svg"}
//                   alt={course.title}
//                   className="object-cover w-full h-48"
//                 />
//                 {/* <Badge className="absolute top-2 right-2">{course.category}</Badge> */}
//                 <Badge className="absolute top-2 right-2 bg-white text-black border border-gray-300 rounded px-2 py-0.5 text-xs font-medium shadow-sm">
//   {course.category}
// </Badge>

//               </div>
//               <CardHeader className="p-4">
//                 <CardTitle className="line-clamp-1">{course.title}</CardTitle>
//                 <CardDescription className="line-clamp-2">{course.description}</CardDescription>
//               </CardHeader>
//               <CardContent className="p-4 pt-0">
//                 <div className="flex items-center gap-4 text-sm text-muted-foreground">
//                   <div className="flex items-center gap-1">
//                     <Clock className="h-4 w-4" />
//                     <span>{course.duration}</span>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <BookOpen className="h-4 w-4" />
//                     <span>{course.lessons} lessons</span>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <Users className="h-4 w-4" />
//                     <span>{course.students}</span>
//                   </div>
//                 </div>
//               </CardContent>
//               <CardFooter className="p-4 flex items-center justify-between">
//                 {/* <div className="flex items-center">
//                   <Star className="h-4 w-4 fill-primary text-primary" />
//                   <Star className="h-4 w-4 fill-primary text-primary" />
//                   <Star className="h-4 w-4 fill-primary text-primary" />
//                   <Star className="h-4 w-4 fill-primary text-primary" />
//                   <Star className="h-4 w-4 fill-muted text-muted" />
//                   <span className="ml-2 text-sm font-medium">{course.rating}</span>
//                 </div> */}
//                 <div className="flex items-center">
//   <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
//   <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
//   <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
//   <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
//   <Star className="h-4 w-4 fill-gray-200 text-gray-200" />
//   <span className="ml-2 text-sm font-medium">{course.rating}</span>
// </div>

//                 <span className="font-bold">{course.price}</span>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>
//         <div className="flex justify-center mt-8">
//           <Button variant="outline" className="gap-1">
//             View All Courses <ArrowRight className="h-4 w-4" />
//           </Button>
//         </div>
//       </div>
//     </section></div>
//   )
// }

// export default FeaturedCourse

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui-components";
import { Button } from "../components/ui-components";
import { Badge } from "../components/ui-components";
import { BookOpen, Clock, Users, ArrowRight, Star } from "lucide-react"

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

const itCourses = [
  {
    title: "Web Development",
    description: "Learn HTML, CSS, and JS to build modern websites.",
    image: webDevImg,
    category: "Development",
    duration: "8 weeks",
    lessons: 24,
    students: "2.5k+",
    rating: 4.8,
    price: "",
  },
  {
    title: "Mobile Development",
    description: "Build advanced apps for iOS & Android.",
    image: mobdevImg,
    category: "Mobile App",
    duration: "10 weeks",
    lessons: 32,
    students: "1.8k+",
    rating: 4.7,
    price: "",
  },
  {
    title: "Python Developer",
    description: "Learn Python for web, data, and automation.",
    image: pythonImg,
    category: "Python",
    duration: "6 weeks",
    lessons: 18,
    students: "3.2k+",
    rating: 4.9,
    price: "",
  },
  {
    title: "DevOps",
    description: "Master DevOps tools & CI/CD pipelines.",
    image: devopsImg,
    category: "DevOps",
    duration: "8 weeks",
    lessons: 22,
    students: "1.5k+",
    rating: 4.6,
    price: "",
  },
  {
          title: "Java Programming",
          description: "Learn core Java programming and object-oriented concepts for real-world applications.",
          image: javaImg, // Add this image to your assets
          category: "Java",
          duration: "8 weeks",
          lessons: 26,
          students: "2.3k+",
          rating: 4.7,
          price: "",
        },
        {
          title: "AWS Cloud Essentials",
          description: "Understand the basics of AWS cloud services and infrastructure deployment.",
          image: awsImg,
          category: "AWS",
          duration: "6 weeks",
          lessons: 20,
          students: "2.1k+",
          rating: 4.8,
          price: "",
        },
        {
          title: "React Development",
          description: "Build dynamic web apps using React, hooks, and modern component-based architecture.",
          image: reactImg,
          category: "React",
          duration: "7 weeks",
          lessons: 28,
          students: "3.0k+",
          rating: 4.9,
          price: "",
        },
        {
          title: "React Native",
          description: "Create cross-platform mobile apps using React Native and Expo framework.",
          image: reactNativeImg,
          category: "React Native",
          duration: "8 weeks",
          lessons: 25,
          students: "2.7k+",
          rating: 4.8,
          price: "",
        },
        {
          title: "Microsoft Azure",
          description: "Learn to use Azure for cloud computing, virtual machines, and scalable deployments.",
          image: azureImg,
          category: "Azure",
          duration: "6 weeks",
          lessons: 22,
          students: "1.9k+",
          rating: 4.7,
          price: "",
        },
];

const nonItCourses = [
  {
    title: "HR Essentials",
    description: "Understand HR hiring, compliance & employee relations.",
    image: hrImg,
    category: "HR",
    duration: "6 weeks",
    lessons: 20,
    students: "2.1k+",
    rating: 4.7,
    price: "",
  },
  {
    title: "Personality Development",
    description: "Boost confidence, communication, and leadership.",
    image: personalityImg,
    category: "Soft Skills",
    duration: "5 weeks",
    lessons: 15,
    students: "3.0k+",
    rating: 4.8,
    price: "",
  },
  {
    title: "Office Communication",
    description: "Master emails, meetings & workplace interactions.",
    image: communicationImg,
    category: "Communication",
    duration: "4 weeks",
    lessons: 12,
    students: "1.7k+",
    rating: 4.6,
    price: "",
  },
  {
    title: "Recruitment Techniques",
    description: "Learn sourcing, screening & interviews.",
    image: recruitmentImg,
    category: "Recruitment",
    duration: "6 weeks",
    lessons: 18,
    students: "2.4k+",
    rating: 4.7,
    price: "",
  },
];


const FeaturedCourse = () => {
  const [activeTab, setActiveTab] = useState("All");

  const allCourses = [...itCourses, ...nonItCourses];

  const getFilteredCourses = () => {
    if (activeTab === "IT") return itCourses;
    if (activeTab === "Non-IT") return nonItCourses;
    return allCourses;
  };

  const filteredCourses = getFilteredCourses();

  return (
    <div>{/* Featured Courses */}

    <section id="courses" className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Courses</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Explore our most popular courses and start your learning journey today.
            </p>
          </div>

          {/* Tabs */}
          {/* Fancy Tabs */}
<div className="relative inline-flex p-1 bg-gray-200  dark:bg-gray-800 rounded-full mt-6 shadow-inner">
  {["All", "IT", "Non-IT"].map((tab) => (
    <button
      key={tab}
      onClick={() => setActiveTab(tab)}
      className={`relative z-10 px-5 py-2 text-sm font-semibold cursor-pointer rounded-full transition-all duration-300 ease-in-out focus:outline-none ${
        activeTab === tab
          ? "bg-white text-blue-600 shadow"
          : "text-gray-600 hover:text-blue-500"
      }`}
    >
      {tab}
    </button>
  ))}
</div>

        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
          {filteredCourses.map((course, index) => (
            <Card key={index} className="overflow-hidden">
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
              <CardHeader className="p-4">
                <CardTitle className="line-clamp-1">{course.title}</CardTitle>
                <CardDescription className="line-clamp-2">{course.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
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
              <CardFooter className="p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-gray-200 text-gray-200" />
                  <span className="ml-2 text-sm font-medium">{course.rating}</span>
                </div>
                <span className="font-bold">{course.price}</span>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* <div className="flex justify-center mt-8">
          <Button variant="outline" className="gap-1">
            View All Courses <ArrowRight className="h-4 w-4" />
          </Button>
        </div> */}
      </div>
    </section>
    </div>
  );
};

export default FeaturedCourse;
