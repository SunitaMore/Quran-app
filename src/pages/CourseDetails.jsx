
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import mobileDevImg from "../assets/images/mobile_dev.png";
import pythonDevImg from "../assets/images/python.png";
import devopsImg from "../assets/images/devops.png";
import javaImg from "../assets/images/java.png";
import awsImg from "../assets/images/aws.png";
import reactImg from "../assets/images/react.png";
import reactNativeImg from "../assets/images/react_native.png";
import azureImg from "../assets/images/azure.png";
import meanImg from "../assets/images/mean.png";
import mernImg from "../assets/images/mern.png";

import hrImg from "../assets/images/hr.png";
import personalityImg from "../assets/images/personality.png";
import officeCommImg from "../assets/images/officecomm.png";
import recruitmentImg from "../assets/images/recruitment.png";
import webDevImg from "../assets/images/web_dev.png";




const coursesData = [
  { id: "web-development",
    title: "Web Development",
    description: "Learn to build modern, responsive websites and web apps from scratch using HTML, CSS, JavaScript, and popular frameworks.",
    duration: "3 Months",
    instructor: "Emily Web",
    level: "Beginner to Intermediate",
    language: "English",
    mode: "Online",
    image: webDevImg,
    syllabus: [
        "Learn the foundational technologies of the web including semantic HTML tags, CSS selectors and properties, and JavaScript syntax and logic for building interactive features.",
        "Understand how to make websites adapt to various screen sizes using CSS Flexbox and Grid layout systems for modern responsive design.",
        "Manipulate webpage elements dynamically using JavaScript and respond to user interactions like clicks and form submissions using event listeners.",
        "Use Fetch API and asynchronous JavaScript to retrieve and display data from external APIs, enabling dynamic and real-time content.",
        "Explore updated JavaScript features like let/const, arrow functions, template literals, destructuring, and modules to write clean and maintainable code.",
        "Learn how to write efficient, reusable, and organized stylesheets using SASS and its features like variables, mixins, and nesting.",
        "Build reliable forms with input validation, error handling, and user feedback mechanisms to improve UX and data accuracy.",
        "Track code changes, manage project history, and collaborate with teams using Git and platforms like GitHub or GitLab.",
        "Use browser Developer Tools to inspect, debug, and test HTML/CSS/JS, and fix issues in real-time with live editing features.",
        "Store and retrieve data in the browser for creating persistent experiences, such as remembering user preferences or cart items.",
        "Implement accessibility best practices using semantic tags and ARIA roles, and learn basic SEO techniques to improve site visibility.",
        "Deploy your website using platforms like GitHub Pages, Netlify, or Vercel, and make your work accessible to the public.",
        "Get a high-level understanding of component-based architecture and how modern frameworks like React simplify dynamic UIs.",
        "Build and deploy a complete portfolio website demonstrating all the skills learned throughout the course."
      ]
      
      
  },
  {
    id: "mobile development",
    title: "Mobile Development",
    description: "Build mobile apps for Android and iOS using popular frameworks.",
    duration: "3 Months",
    instructor: "Ankit Kumar",
    level: "Intermediate",
    language: "English",
    mode: "Online",
    image: mobileDevImg,
    syllabus: [
        "Understand the fundamentals of mobile operating systems and development environments for Android and iOS.",
        "Learn to set up and work with React Native, building reusable components and using JSX syntax.",
        "Explore navigation using React Navigation and handle routing between different screens in a mobile app.",
        "Manage global state in your application using Redux and Context API to create scalable apps.",
        "Use native device features like camera, GPS, and file storage through platform APIs.",
        "Design user interfaces using responsive layouts and style your app components with StyleSheet and external libraries.",
        "Test your app on emulators and real devices, and debug using tools like Flipper and Chrome DevTools.",
        "Deploy mobile apps to Google Play Store and Apple App Store with proper signing and packaging.",
        "Learn mobile optimization and performance enhancement techniques.",
        "Build a capstone project: a fully functional mobile application with navigation, API integration, and state management."
      ],
      
  },
  {
    id: "python developer",
    title: "Python Developer",
    description: "Master Python from basics to advanced for web and automation.",
    duration: "3 Months",
    instructor: "Ayesha Verma",
    level: "Beginner to Advanced",
    language: "English",
    mode: "Online",
    image: pythonDevImg,
    syllabus: [
        "Start with Python syntax, variables, loops, functions, and data structures such as lists and dictionaries.",
        "Understand object-oriented programming in Python including classes, inheritance, and encapsulation.",
        "Develop web applications using Flask and explore routing, templating, and forms.",
        "Work with file handling, error management, and regular expressions.",
        "Perform data manipulation and analysis using NumPy and Pandas libraries.",
        "Learn to scrape data from websites using BeautifulSoup and Requests modules.",
        "Write automation scripts for real-world tasks like email notifications or file renaming.",
        "Work with APIs to fetch external data and integrate it into Python applications.",
        "Understand unit testing in Python and build test-driven programs using PyTest.",
        "Build a complete project such as a portfolio site, blog, or automation tool using Python and Flask."
      ],
      
  },
  {
    id: "devops",
    title: "DevOps",
    description: "Learn CI/CD, infrastructure automation, and cloud operations.",
    duration: "2.5 Months",
    instructor: "Ravi Dev",
    level: "Advanced",
    language: "English",
    mode: "Hybrid",
    image: devopsImg,
    syllabus: [
        "Understand the principles of DevOps including collaboration, automation, and continuous delivery.",
        "Set up Linux environments and automate tasks using shell scripting.",
        "Work with Git and GitHub for version control and team collaboration.",
        "Build CI/CD pipelines using Jenkins and GitHub Actions.",
        "Containerize applications using Docker and manage services using Docker Compose.",
        "Orchestrate containers and manage deployments with Kubernetes.",
        "Monitor application performance with tools like Prometheus and Grafana.",
        "Learn Infrastructure as Code (IaC) using Terraform or Ansible.",
        "Implement log monitoring with ELK Stack for debugging and alerts.",
        "Deploy a full CI/CD pipeline to automate testing and deployment for a real-world app."
      ],
      
  },
  {
    id: "java programming",
    title: "Java Programming",
    description: "Comprehensive Java training covering core to advanced topics.",
    duration: "2 Months",
    instructor: "Sneha Sharma",
    level: "Beginner",
    language: "English",
    mode: "Offline",
    image: javaImg,
    syllabus: [
        "Learn the syntax and structure of Java including variables, data types, control statements, and loops.",
        "Understand object-oriented programming principles like inheritance, polymorphism, abstraction, and encapsulation.",
        "Work with Java Collections Framework such as ArrayList, HashMap, and TreeSet to manage data efficiently.",
        "Explore exception handling techniques and create custom exceptions to build robust applications.",
        "Connect Java applications with MySQL using JDBC for performing database operations like CRUD.",
        "Develop GUI-based applications using JavaFX or Swing with interactive components and event handling.",
        "Understand file I/O, serialization, and multithreading for advanced Java programming.",
        "Explore Java 8+ features including Lambda expressions, Streams API, and Functional Interfaces.",
        "Build RESTful APIs using Spring Boot and manage application layers with proper architecture.",
        "Create a real-world Java project, such as a mini banking system or an employee management portal."
      ]
      ,
  },
  {
    id: "aws cloud essentials",
    title: "AWS Cloud Essentials",
    description: "Get started with cloud computing and core AWS services.",
    duration: "1.5 Months",
    instructor: "Mehul Roy",
    level: "Beginner",
    language: "English",
    mode: "Online",
    image: awsImg,
    syllabus: [
        "Understand the basics of cloud computing and core AWS services like EC2, S3, and IAM.",
        "Launch and configure virtual servers using EC2, and set up key pairs, security groups, and elastic IPs.",
        "Learn how to create and manage scalable object storage with S3 and implement lifecycle policies.",
        "Explore identity and access management (IAM) to control user permissions and roles securely.",
        "Understand networking on AWS including VPC, subnets, route tables, and NAT gateways.",
        "Work with managed database services like RDS and DynamoDB for scalable and secure storage solutions.",
        "Monitor AWS resources using CloudWatch and manage alerts, metrics, and logs.",
        "Estimate costs and budgets using AWS Billing Dashboard and Pricing Calculator.",
        "Implement serverless functions using AWS Lambda and trigger them through S3 or API Gateway.",
        "Deploy a fully functional project using multiple AWS services demonstrating real-world scenarios."
      ],
      
  },
  {
    id: "react development",
    title: "React Development",
    description: "Create powerful front-end web applications using React.js.",
    duration: "2 Months",
    instructor: "Ritika Singh",
    level: "Intermediate",
    language: "English",
    mode: "Online",
    image: reactImg,
    syllabus: [
        "Understand the fundamentals of React including JSX, components, props, and state.",
        "Learn about function components and React Hooks such as useState, useEffect, and useRef.",
        "Implement client-side routing using React Router for seamless single-page applications.",
        "Use Context API for managing global state and avoid prop drilling in complex component trees.",
        "Fetch data from APIs using Axios or Fetch API and handle asynchronous operations efficiently.",
        "Build responsive UIs with conditional rendering, reusable components, and layout structures.",
        "Integrate form handling with validation using libraries like Formik and Yup.",
        "Use React Developer Tools and browser extensions to debug and optimize applications.",
        "Deploy React applications to platforms like Vercel, Netlify, or GitHub Pages.",
        "Complete a capstone project like a task manager, e-commerce UI, or portfolio app using modern React practices."
      ],
      
  },
  {
    id: "react native",
    title: "React Native",
    description: "Build native mobile apps using JavaScript and React Native.",
    duration: "2.5 Months",
    instructor: "Kunal Vyas",
    level: "Intermediate",
    language: "English",
    mode: "Hybrid",
    image: reactNativeImg,
    syllabus: [
        "Get introduced to mobile development with React Native and understand its architecture and native components.",
        "Set up your environment using Expo CLI and build cross-platform apps for Android and iOS.",
        "Design and organize screens using React Navigation, Stack Navigator, and Tab Navigation.",
        "Implement local state management using Hooks like useState and useReducer.",
        "Access native device features such as camera, location, and push notifications using Expo APIs.",
        "Perform asynchronous data fetching using Fetch API or Axios with error handling and loaders.",
        "Create reusable components and apply consistent styling with StyleSheet and responsive design techniques.",
        "Store and manage persistent data using AsyncStorage and integrate with external APIs.",
        "Debug apps using Chrome DevTools, Flipper, and React Native Debugger.",
        "Build and publish apps on Google Play Store and Apple App Store with proper configuration."
      ],
      
  },
  {
    id: "microsoft azure",
    title: "Microsoft Azure",
    description: "Gain practical experience with Azure services and deployments.",
    duration: "2 Months",
    instructor: "Ashwin R",
    level: "Beginner to Intermediate",
    language: "English",
    mode: "Online",
    image: azureImg,
    syllabus: [
        "Understand the core concepts of cloud computing and how Azure fits into the cloud ecosystem.",
        "Get started with the Azure Portal and CLI to manage cloud services and resources.",
        "Create and configure virtual machines and scale them to meet varying demands.",
        "Work with Azure App Services to host web applications and APIs with minimal setup.",
        "Explore Azure Storage options including Blob, Table, Queue, and File storage.",
        "Understand networking concepts like VNets, NSGs, and Azure DNS to secure connectivity.",
        "Use Azure Resource Manager (ARM) templates for automated infrastructure deployment.",
        "Manage access and permissions using Azure Active Directory and RBAC.",
        "Monitor and troubleshoot applications with Azure Monitor, Log Analytics, and Application Insights.",
        "Deploy and manage containerized applications using Azure Kubernetes Service (AKS)."
      ],
      
  },
  {
    id: "mean stack development",
    title: "MEAN Stack Development",
    description: "Full-stack JavaScript development using MongoDB, Express, Angular, and Node.js.",
    duration: "3 Months",
    instructor: "Aman Qureshi",
    level: "Advanced",
    language: "English",
    mode: "Offline",
    image: meanImg,
    syllabus: [
        "Understand the architecture and components of the MEAN stack: MongoDB, Express.js, Angular, and Node.js.",
        "Set up a Node.js environment and build RESTful APIs using Express.js and middleware.",
        "Design NoSQL schemas in MongoDB and perform CRUD operations using Mongoose ORM.",
        "Create a dynamic frontend using Angular with TypeScript, components, and services.",
        "Implement two-way data binding, form validation, and reactive forms in Angular.",
        "Secure routes and APIs using JWT-based authentication and role-based access control.",
        "Use Angular HttpClient to interact with backend APIs and handle asynchronous requests.",
        "Deploy MEAN stack apps to cloud platforms like Heroku or DigitalOcean.",
        "Follow best practices for folder structure, performance optimization, and error handling.",
        "Build a full-stack capstone project, such as a task tracker or inventory system."
      ],
      
  },
  {
    id: "mern stack development",
    title: "MERN Stack Development",
    description: "Develop dynamic full-stack apps with MongoDB, Express, React, and Node.",
    duration: "3 Months",
    instructor: "Rohit Dey",
    level: "Advanced",
    language: "English",
    mode: "Hybrid",
    image: mernImg,
    syllabus: [
        "Master the MERN stack: MongoDB for database, Express.js for backend, React for frontend, and Node.js as runtime.",
        "Set up a server with Node.js and build robust RESTful APIs using Express.js.",
        "Create and manage MongoDB collections and documents using Mongoose for data modeling.",
        "Develop a React-based frontend with reusable components and React Router for navigation.",
        "Implement state management using Hooks and Context API for scalable applications.",
        "Integrate backend APIs with the frontend for dynamic data handling and UI updates.",
        "Add authentication and authorization features with JWT and bcrypt for user roles and security.",
        "Deploy the MERN application using services like Render, Vercel, or Netlify with backend integration.",
        "Use Postman for API testing and Git for version control and team collaboration.",
        "Build and launch a final full-stack application such as a blog platform, task manager, or e-commerce site."
      ],
      
  },
  {
  id: "hr-essentials",
  title: "HR Essentials",
  description: "Understand core HR functions from hiring to employee engagement.",
  duration: "2 Months",
  instructor: "Jane HR",
  level: "Beginner",
  language: "English",
  mode: "Offline",
 image: hrImg, // Add image path
  syllabus: [
    "Explore the complete employee lifecycle from recruitment to exit management with real-world examples.",
    "Learn about labor laws, statutory compliance, and internal HR policies and how they impact daily operations.",
    "Understand performance appraisals, feedback cycles, and employee engagement techniques.",
    "Hands-on HRMS tools demo, leave/attendance management systems, and generating reports.",
    "Get insights into managing diversity, workplace culture, and conflict resolution effectively."
  ]
}
,
  {
    id: "personality development",
    title: "Personality Development",
    description: "Enhance your soft skills, confidence, and public speaking abilities.",
    duration: "1.5 Months",
    instructor: "Neha Kapoor",
    level: "Beginner",
    language: "English & Hindi",
    mode: "Offline",
    image: personalityImg,
    syllabus: [
        "Learn how to enhance your personal and professional image through self-awareness and emotional intelligence.",
        "Understand the importance of body language, grooming, and etiquette in daily interactions.",
        "Develop communication skills for clarity, confidence, and effectiveness in social and work environments.",
        "Improve public speaking and presentation abilities through structured practice sessions.",
        "Learn time management, goal setting, and prioritization to boost productivity and confidence.",
        "Understand how to handle criticism, manage stress, and maintain a positive mindset.",
        "Cultivate leadership skills, decision-making, and assertiveness to build a proactive personality.",
        "Participate in team-building exercises and personality assessment tools like SWOT analysis.",
        "Engage in practical activities such as mock interviews, group discussions, and storytelling.",
        "Receive personalized feedback to overcome shyness, anxiety, and improve self-expression."
      ]
      ,
  },
  {
    id: "office communication",
    title: "Office Communication",
    description: "Master verbal and written communication for a professional environment.",
    duration: "1 Month",
    instructor: "Rahul Shetty",
    level: "Beginner",
    language: "English",
    mode: "Online",
    image: officeCommImg,
    syllabus: [
        "Understand workplace communication fundamentals including verbal, non-verbal, and written forms.",
        "Master email and report writing skills for professional and effective internal communication.",
        "Learn telephone and video call etiquette, and how to participate effectively in virtual meetings.",
        "Improve interpersonal communication and listening skills for collaborative work environments.",
        "Develop conflict resolution and negotiation techniques in office scenarios.",
        "Practice giving and receiving constructive feedback in a respectful and growth-oriented manner.",
        "Understand the communication styles of different departments and team roles.",
        "Learn formal and informal presentation skills using tools like PowerPoint and Google Slides.",
        "Study communication barriers such as language, bias, and cultural differences and ways to overcome them.",
        "Work on real-world simulations like customer interactions, status updates, and meeting summaries."
      ]
      ,
  },
  {
    id: "recruitment techniques",
    title: "Recruitment Techniques",
    description: "Explore modern hiring methods and interview strategies.",
    duration: "1.5 Months",
    instructor: "Manav Bansal",
    level: "Intermediate",
    language: "English",
    mode: "Hybrid",
    image: recruitmentImg,
    syllabus: [
        "Understand the end-to-end recruitment cycle including job analysis, posting, screening, and selection.",
        "Learn how to write effective job descriptions and attract qualified candidates via job portals and social media.",
        "Explore different sourcing techniques including internal referrals, campus drives, and recruitment agencies.",
        "Master resume shortlisting and candidate evaluation techniques through real CVs.",
        "Conduct structured interviews using STAR method and competency-based questions.",
        "Understand candidate background verification, reference checks, and pre-employment documentation.",
        "Use applicant tracking systems (ATS) and recruitment CRMs for process management.",
        "Learn recruitment metrics such as time-to-hire, cost-per-hire, and quality-of-hire.",
        "Study current hiring trends including remote hiring, diversity hiring, and employer branding.",
        "Participate in mock recruitment drives to practice screening, interviewing, and final selection."
      ]
      ,
  },
];


const CourseDetails = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const course = coursesData.find((course) => course.id === courseId);

  if (!course) {
    return (
      <div className="p-8 text-center text-red-600 font-bold bg-white">
        Course Not Found
      </div>
    );
  }
  

  return (
    <div className="bg-white p-8 text-gray-800 max-w-6xl mx-auto rounded-2xl shadow-md">
      {/* Top Section with Image and Meta Info */}
      <div className="flex flex-col md:flex-row gap-8 mb-6">
     {/* Go Back + Image in one line */}
     <div className="flex items-center gap-4 w-full md:w-1/2">
  <button
    onClick={() => navigate("/courses")}
    className="bg-blue-800 text-white text-sm px-3 py-1 rounded-md hover:bg-gray-700 transition"
  >
    ←Back
  </button>

  {course.image && (
    <img
      src={course.image}
      alt={course.title}
      className="h-64 w-full object-cover rounded-xl"
    />
  )}
</div>



        {/* Meta Info on Right */}
        <div className="flex flex-col justify-between w-full">
          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
          <p className="mb-6">{course.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base">
          <p><strong className="text-green-600">Duration:</strong> {course.duration}</p>
<p><strong className="text-green-600">Instructor:</strong> <span className="text-black">{course.instructor}</span></p>
<p><strong className="text-green-600">Level:</strong> <span className="text-black">{course.level}</span></p>
<p><strong className="text-green-600">Language:</strong> <span className="text-black">{course.language}</span></p>
<p><strong className="text-green-600">Mode:</strong> <span className="text-black">{course.mode}</span></p>

          </div>
        </div>
      </div>

      {/* Syllabus Section */}
      <h2 className="text-2xl font-semibold mb-3 border-b border-black pb-2 text-left text-red-600">Syllabus</h2>

      <ul className="space-y-4 list-disc list-inside pl-5 text-justify">
        {course.syllabus.map((point, index) => (
          <li key={index} className="leading-relaxed">{point}</li>
        ))}
      </ul>

      <div className="text-center mt-8">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-lg hover:bg-blue-700 transition duration-300">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;
