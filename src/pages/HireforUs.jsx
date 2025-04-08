import React from 'react'



const jobRoles = [
  {
    title: "IT Course Instructor",
    category: "Teaching",
    description:
      "Deliver engaging, hands-on lessons in web development, data science, cloud computing, or cybersecurity.",
  },
  {
    title: "Digital Marketing Specialist",
    category: "Marketing",
    description:
      "Drive online growth through SEO, paid ads, email marketing, and content strategies tailored for tech education.",
  },
  {
    title: "Student Support Coordinator",
    category: "Operations",
    description:
      "Assist learners with their course journey, resolve queries, and ensure a smooth learning experience.",
  },
  {
    title: "Content Writer (Tech)",
    category: "Content",
    description:
      "Write blogs, scripts, and learning materials in a way that's accessible, engaging, and accurate.",
  },
  {
    title: "UI/UX Designer",
    category: "Design",
    description:
      "Design intuitive and user-friendly interfaces for our learning platform and website.",
  },
  {
    title: "Course Coordinator",
    category: "Academics",
    description:
      "Manage course scheduling, instructor onboarding, and quality control of learning materials.",
  },
];



const HireforUs = () => {
  return (
    <section className=" text-gray-800 px-4 py-12 md:py-20">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold text-black-600 mb-4">We're Hiring!</h2>
        <p className="text-lg text-gray-600">
          Join our mission to shape the future of IT education. Explore open roles across multiple departments.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {jobRoles.map((role, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
          >
            <h3 className="text-xl font-semibold text-black-600 mb-2">
              {role.title}
            </h3>
            <p className="text-sm text-gray-500 mb-2 font-medium">
              {role.category}
            </p>
            <p className="text-sm text-gray-700">{role.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <h4 className="text-xl font-semibold mb-4">
          Think you're a fit? We'd love to hear from you.
        </h4>
        <a
          href="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition duration-200"
        >
          Apply Now
        </a>
      </div>
    </section>
  )
}

export default HireforUs