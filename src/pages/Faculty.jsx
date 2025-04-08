import React from 'react'



const facultyMembers = [
  {
    name: "Dr. Jane Smith",
    title: "Lead Instructor - Full Stack Development",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Jane brings over 10 years of experience building scalable web applications and mentoring aspiring developers.",
  },
  {
    name: "John Doe",
    title: "Senior Instructor - Data Science",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    bio: "John specializes in machine learning and AI with a strong background in Python and R.",
  },
  {
    name: "Lisa Wang",
    title: "Cloud Computing Expert",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    bio: "AWS Certified Solutions Architect with 7+ years of experience in cloud infrastructure and DevOps.",
  },
  {
    name: "Mark Thompson",
    title: "Cybersecurity Instructor",
    image: "https://randomuser.me/api/portraits/men/66.jpg",
    bio: "Mark has a passion for ethical hacking and helps students understand modern security practices.",
  },
];



const Faculty = () => {
  return (
    <section className="bg-white px-6 py-12 md:py-20 text-gray-800">
    <div className="max-w-6xl mx-auto text-center mb-12">
      <h2 className="text-4xl font-bold text-blue-600 mb-4">Meet Our Faculty</h2>
      <p className="text-lg text-gray-600">
        Our instructors are industry professionals dedicated to your success.
      </p>
    </div>

    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-6xl mx-auto">
      {facultyMembers.map((member, index) => (
        <div
          key={index}
          className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
          />
          <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
          <p className="text-sm text-blue-600 mb-2">{member.title}</p>
          <p className="text-sm text-gray-600">{member.bio}</p>
        </div>
      ))}
    </div>
  </section>
  )
}

export default Faculty