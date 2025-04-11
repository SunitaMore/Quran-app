import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Ecommerce from '../assets/images/Ecommerce.png';
import Realchat from '../assets/images/Realchat.png';
import Dashboard from '../assets/images/Dashboard.png';
import Weather from '../assets/images/Weather.png';
import Profit from '../assets/images/Profit.png';

const projectDetails = {
  ecommerce: {
    title: "E-Commerce Website",
    image: Ecommerce,
    content: `The E-Commerce Website is a comprehensive online shopping platform built using the MERN stack—MongoDB, Express.js, React, and Node.js. It features user registration and authentication with JWT, secure payment integration via Stripe, a responsive product catalog, and advanced cart functionalities. Users can search, filter, and review products, while the admin dashboard provides tools to manage product listings, categories, inventory, orders, and users.

    The application includes role-based access control, order tracking, dynamic pricing, discount management, and email notifications for order updates. It ensures data security through password hashing, API protection, and proper validation. The UI is designed with a focus on usability and performance, offering a seamless shopping experience across mobile and desktop devices.

    The backend utilizes Express.js and MongoDB for scalable data operations, including product queries, stock updates, and user activity logs. The frontend is built with React and Tailwind CSS for efficient component styling and responsive layouts. This project is a full-fledged, real-world e-commerce system that demonstrates best practices in full-stack development, user-centered design, and secure payment handling.`,
  },

  chat: {
    title: "Real-Time Chat App",
    image: Realchat,
    content: `The Real-Time Chat App is a robust communication platform enabling instant messaging using Socket.io, React, Express, and MongoDB. It supports user authentication via JWT, real-time private and group chats, and persistent message history stored in MongoDB. Users can register, log in, update their profiles, and initiate 1-on-1 or multi-user conversations with online/offline indicators.

    The app features typing indicators, unread message counts, and real-time presence updates, enhancing user interaction. Admin functionalities include chat moderation, user blocking, and system notifications. The chat interface supports emojis, file sharing, and time-stamped messages, creating a seamless, user-friendly experience. Socket.io powers the bi-directional communication layer for instant delivery, ensuring minimal latency across devices.

    The frontend is designed using React and Tailwind CSS, optimized for responsive behavior and accessibility. On the backend, Express.js manages routing and APIs while MongoDB handles data persistence. This application demonstrates practical implementation of WebSockets, JWT-based security, scalable architecture, and modern UI principles, making it a powerful, real-world communication tool.`,
  },

  dashboard: {
    title: "Data Dashboard",
    image: Dashboard,
    content: `The Data Dashboard is an interactive analytics platform designed to visualize and track key business metrics in real-time. Built using React, Chart.js, and RESTful APIs, it displays interactive charts, graphs, and KPI cards to present complex data in an intuitive manner. Users can filter and drill down data based on time range, product categories, regions, and other custom dimensions. It also supports PDF/CSV export of reports, making data analysis and sharing easy.

    Live updates ensure real-time accuracy, powered by backend APIs that fetch, process, and aggregate data from multiple sources securely. The interface adapts seamlessly to all screen sizes, built with responsive design principles using Tailwind CSS. Admin users can configure dashboards, set threshold alerts, and access audit trails. This project highlights expertise in data visualization, API integration, frontend architecture, and responsive UI design for enterprise-level analytics.`,
  },

  weather: {
    title: "Weather Forecast App",
    image: Weather,
    content: `The Weather Forecast App is a sleek, responsive application that provides users with accurate, real-time weather data using their current location or city search. Developed with React, Axios, and the OpenWeatherMap API, it displays live temperature, humidity, wind speed, pressure, sunrise/sunset times, and a dynamic 5-day forecast. The app uses conditional rendering to show intuitive weather icons and background themes based on weather conditions.

    It features a search history, location autocomplete, and metric/imperial unit toggle for global usability. The frontend is built with Tailwind CSS, ensuring a polished and adaptive layout for mobile and desktop users. This project demonstrates API consumption, state management with hooks, responsive UI, and an enhanced user experience through real-time data visualization and modern design principles.`,
  },

  portfolio: {
    title: "Portfolio Website",
    image: Profit,
    content: `The Portfolio Website is a polished, fully responsive web application created to present personal projects, technical skills, certifications, and professional background in an engaging way. Developed using React, Tailwind CSS, and Framer Motion, it features elegant transitions, smooth scrolling, a dark/light mode switch, and animated elements for a modern aesthetic.

    Each section—including About, Projects, Skills, Certificates, and Contact—is carefully structured with reusable components for scalability and maintainability. Projects are presented in interactive cards with ‘See More’ functionality leading to detailed views. SEO optimization, lazy loading, and responsive design ensure performance and accessibility across devices. This project reflects strong UI/UX design principles, frontend development skills, and attention to personal branding for professional visibility.`,
  },
};

const ProjectDetails = () => {
  const { title } = useParams();
  const navigate = useNavigate();

  const project = projectDetails[title];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      {project ? (
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          {/* Title */}
          <h1 className="text-4xl font-bold text-black text-center mb-8">
            {project.title}
          </h1>

          {/* Image */}
          <div className="flex justify-center mb-8">
            <img
              src={project.image}
              alt={project.title}
              className="rounded-xl shadow-md w-full max-w-[600px] h-[300px] object-cover"
            />
          </div>

          {/* Content */}
          <p className="text-xl font-semibold whitespace-pre-line leading-relaxed text-justify">
            {project.content}
          </p>

          {/* Back Button */}
          <div className="mt-10 text-center">
            <button
              onClick={() => navigate("/Handproject")}
              className="px-5 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
            >
              ← Back to Projects
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-600">Project not found.</p>
          <button
            onClick={() => navigate("/training-projects")}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
          >
            Back to Projects
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
