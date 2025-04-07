import React from "react";
import AboutImage from '../assets/images/about_us.jpg';
function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Founder & CEO",
      bio: "With over 15 years in IT education and industry experience at major tech companies.",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Michael Chen",
      role: "Lead Instructor, Web Development",
      bio: "Full-stack developer with 10+ years of experience building enterprise applications.",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Priya Patel",
      role: "Lead Instructor, Data Science",
      bio: "Data scientist with expertise in machine learning and AI implementations.",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "James Wilson",
      role: "Student Success Manager",
      bio: "Dedicated to ensuring students receive the support they need throughout their learning journey.",
      image: "https://via.placeholder.com/150",
    },
  ];

  const testimonials = [
    {
      quote:
        "IT Course completely transformed my career. I went from a non-technical background to landing a job as a full-stack developer within 6 months of completing their program.",
      name: "Alex Rivera",
      title: "Software Developer at TechCorp",
    },
    {
      quote:
        "The practical approach to learning at IT Course gave me the confidence to apply for positions I previously thought were out of reach. Their career support was invaluable.",
      name: "Emma Thompson",
      title: "Data Analyst at DataTech Solutions",
    },
    {
      quote:
        "As someone switching careers in my 30s, I was worried about breaking into tech. IT Course provided the perfect blend of theory and practice that employers were looking for.",
      name: "David Kim",
      title: "Network Administrator at Global Systems",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b  ">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              About IT Course
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Empowering the next generation of IT professionals through quality education and practical training.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Our Story</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Building IT Excellence Since 2015</h2>
              <p className="text-gray-500 md:text-lg">
                IT Course was founded with a simple mission: to bridge the gap between theoretical knowledge and
                practical skills in the IT industry. What started as a small training center has grown into a
                comprehensive educational platform serving thousands of students worldwide.
              </p>
              <p className="text-gray-500 md:text-lg">
                Our journey began when a group of industry professionals noticed that many IT graduates lacked the
                hands-on experience needed to excel in real-world environments. We set out to create courses that
                combine academic rigor with practical application, ensuring our students are job-ready upon completion.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src= {AboutImage}
                alt="IT Course campus"
                className="rounded-lg object-cover mt-14"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 rounded-4xl">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Mission & Values</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Guiding principles that drive everything we do at IT Course.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-full bg-gray-100">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold">Quality Education</h3>
              <p className="text-gray-500">
                We are committed to providing the highest quality IT education that meets industry standards and
                prepares students for real-world challenges.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-full bg-gray-100">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-bold">Practical Learning</h3>
              <p className="text-gray-500">
                We believe in learning by doing. Our courses emphasize hands-on projects and real-world applications
                of theoretical concepts.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-full bg-gray-100">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold">Inclusive Community</h3>
              <p className="text-gray-500">
                We foster an inclusive learning environment where students from all backgrounds can thrive and
                contribute to the IT industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What We Offer</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Comprehensive IT education solutions designed for your success.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex items-start space-x-4">
              <span className="text-green-500 text-xl font-bold">✓</span>
              <div>
                <h3 className="text-xl font-bold mb-2">Industry-Relevant Curriculum</h3>
                <p className="text-gray-500">
                  Our courses are designed in collaboration with industry experts to ensure you learn the most relevant
                  and in-demand skills.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-green-500 text-xl font-bold">✓</span>
              <div>
                <h3 className="text-xl font-bold mb-2">Expert Instructors</h3>
                <p className="text-gray-500">
                  Learn from professionals with years of experience in the IT industry who bring real-world insights to
                  the classroom.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-green-500 text-xl font-bold">✓</span>
              <div>
                <h3 className="text-xl font-bold mb-2">Flexible Learning Options</h3>
                <p className="text-gray-500">
                  Choose from online, in-person, or hybrid learning formats to fit your schedule and learning
                  preferences.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-green-500 text-xl font-bold">✓</span>
              <div>
                <h3 className="text-xl font-bold mb-2">Career Support</h3>
                <p className="text-gray-500">
                  Access resume reviews, interview preparation, and job placement assistance to help you launch your IT
                  career.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 rounded-4xl">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Our Team</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Dedicated professionals committed to your IT education journey.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-4">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="rounded-full w-32 h-32 object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-gray-600 font-medium">{member.role}</p>
                  <p className="text-gray-500 mt-2">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Achievements</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Milestones that mark our commitment to excellence in IT education.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="text-4xl font-bold text-gray-800">10,000+</div>
              <p className="text-gray-500">Students Trained</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="text-4xl font-bold text-gray-800">50+</div>
              <p className="text-gray-500">Industry Partners</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="text-4xl font-bold text-gray-800">95%</div>
              <p className="text-gray-500">Job Placement Rate</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="text-4xl font-bold text-gray-800">30+</div>
              <p className="text-gray-500">Specialized Courses</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 rounded-4xl">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Student Success Stories</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Hear from our graduates who have transformed their careers through IT Course.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="italic text-gray-600 mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32  ">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Start Your IT Journey?
            </h2>
            <p className="mx-auto max-w-[700px]  md:text-xl">
              Join thousands of students who have advanced their careers with IT Course.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button className="bg-white text-gray-800 hover:bg-gray-200 px-8 py-3 rounded-md font-bold transition-colors">
                Explore Courses
              </button>
              <button className="bg-transparent border-2 border-white hover:text-white hover:bg-gray-700 px-8 py-3 rounded-md font-bold transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;