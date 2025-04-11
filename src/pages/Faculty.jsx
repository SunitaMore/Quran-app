import React from 'react';
import { FaLinkedin } from "react-icons/fa6";

const facultyMembers = [
  {
    name: "Dr. Jane Smith",
    title: "Lead Instructor - Full Stack Development",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Jane brings over 10 years of experience building scalable web applications and mentoring aspiring developers.",
    linkedin: "https://linkedin.com/in/jane-smith",
  },
  {
    name: "John Doe",
    title: "Senior Instructor - Data Science",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    bio: "John specializes in machine learning and AI with a strong background in Python and R.",
    linkedin: "https://linkedin.com/in/john-doe",
  },
  {
    name: "Lisa Wang",
    title: "Cloud Computing Expert",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    bio: "AWS Certified Solutions Architect with 7+ years of experience in cloud infrastructure and DevOps.",
    linkedin: "https://linkedin.com/in/lisa-wang",
  },
  {
    name: "Mark Thompson",
    title: "Cybersecurity Instructor",
    image: "https://randomuser.me/api/portraits/men/66.jpg",
    bio: "Mark has a passion for ethical hacking and helps students understand modern security practices.",
    linkedin: "https://linkedin.com/in/mark-thompson",
  },
  {
    name: "Emily Johnson",
    title: "UI/UX Design Mentor",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    bio: "Emily has over 8 years of experience in user-centered design, helping students build intuitive digital experiences.",
    linkedin: "https://linkedin.com/in/emily-johnson",
  }, 
  {
    name: "Michael Chen",
    title: "AI & ML Specialist",
    image: "https://randomuser.me/api/portraits/men/72.jpg",
    bio: "Michael holds a Ph.D. in Artificial Intelligence and has published multiple papers in top ML conferences.",
    linkedin: "https://linkedin.com/in/michael-chen",
  },
  {
    name: "Sara Ali",
    title: "Mobile App Development Instructor",
    image: "https://randomuser.me/api/portraits/women/70.jpg",
    bio: "Sara is a Flutter and React Native expert, passionate about helping students craft amazing mobile experiences.",
    linkedin: "https://linkedin.com/in/sara-ali",
  },
  {
    name: "David Lee",
    title: "DevOps & Automation Guru",
    image: "https://randomuser.me/api/portraits/men/71.jpg",
    bio: "David has a decade of experience in automation, CI/CD pipelines, and infrastructure as code.",
    linkedin: "https://linkedin.com/in/david-lee",
  },
];

const Faculty = () => {
  return (
    <section className="px-6 py-12 md:py-20 text-gray-800">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-black-600 mb-4">Meet Our Faculty</h2>
        <p className="text-2xl  text-blue-700 font-bold" >
          Our instructors are industry professionals dedicated to your success.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-6xl mx-auto">
        {facultyMembers.map((member, index) => (
          <div
          key={index}
          className="bg-gray-100  p-6 rounded-xl shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-blue-50"
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-sm"
          />
        
          <div className="flex items-center justify-center gap-2 mb-1">
            <h3 className="text-xl font-semibold text-center">{member.name}</h3>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-600 hover:text-blue-800 text-lg" />
            </a>
          </div>
        
          <p className="text-sm text-blue-600 mb-2">{member.title}</p>
          <p className="text-sm text-gray-600">{member.bio}</p>
        </div>
        
        ))}
      </div>
    </section>
  );
};

export default Faculty;
