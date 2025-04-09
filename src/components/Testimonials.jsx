// // import React from "react";
// // import userIcon from '../assets/images/userIcon.png';
// // import {
// //   Card,
// //   CardContent,
// //   CardDescription,
// //   CardFooter,
// //   CardHeader,
// //   CardTitle,
// // } from "../components/ui-components";
// // import {
// //   BookOpen,
// //   Clock,
// //   GraduationCap,
// //   Users,
// //   CheckCircle,
// //   ArrowRight,
// //   Star,
// // } from "lucide-react";
// // const testimonials = [
// //   {
// //     name: "Sarah Johnson",
// //     role: "Web Developer",
// //     avatar: userIcon,
// //     content:
// //       "The web development course completely transformed my career. I went from knowing nothing about coding to landing a full-time developer job in just 6 months.",
// //   },
// //   {
// //     name: "Michael Chen",
// //     role: "Data Analyst",
// //     avatar: userIcon,
// //     content:
// //       "The data science curriculum was comprehensive and up-to-date. The projects helped me build a portfolio that impressed employers during interviews.",
// //   },
// //   {
// //     name: "Emily Rodriguez",
// //     role: "Marketing Manager",
// //     avatar: userIcon,
// //     content:
// //       "The digital marketing course provided actionable strategies that I implemented immediately. Our company's online presence has grown significantly as a result.",
// //   },
// // ];

// // const Testimonials = () => {
// //   return (
// //     <>
// //       {/* Testimonials */}
// //       {/* Testimonials */}
// //       <section id="testimonials" className="w-full py-12 md:py-24 bg-muted/50">
// //         <div className="container px-4 md:px-6">
// //           <div className="flex flex-col items-center justify-center space-y-4 text-center">
// //             <div className="space-y-2">
// //               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Student Success Stories</h2>
// //               <p className="max-w-[900px] text-muted-foreground md:text-xl">
// //                 Hear from our students who have transformed their careers through our courses.
// //               </p>
// //             </div>
// //           </div>
// //           <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
// //             {testimonials.map((testimonial, index) => (
// //               <Card key={index} className="overflow-hidden">
// //                 <CardHeader className="pb-2 bg-gray-100">
// //                   <div className="flex items-center gap-4 bg-gray-100">
// //                     <img
// //                       src={testimonial.avatar || "/placeholder.svg"}
// //                       alt={testimonial.name}
// //                       className="rounded-full object-cover w-[50px] h-[50px]"
// //                     />
// //                     <div>
// //                       <CardTitle className="text-lg ">{testimonial.name}</CardTitle>
// //                       <CardDescription>{testimonial.role}</CardDescription>
// //                     </div>
// //                   </div>
// //                 </CardHeader>
// //                 <CardContent className="bg-gray-100">
// //                   <p className="text-muted-foreground bg-gray-100">{testimonial.content}</p>
// //                 </CardContent>
// //                 <CardFooter className="pt-0 bg-gray-100">
// //                   <div className="flex">
// //                     <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
// //                     <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
// //                     <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
// //                     <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
// //                     <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
// //                   </div>

// //                 </CardFooter>
// //               </Card>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //     </>
// //   );
// // };
// // export default Testimonials;

//  import React from "react";
// import userIcon from "../assets/images/userIcon.png";
// import { Star } from "lucide-react";

// const testimonials = [
//   {
//     name: "Sarah Johnson",
//     role: "Web Developer",
//     avatar: userIcon,
//     content:
//       "The web development course completely transformed my career. I went from knowing nothing about coding to landing a full-time developer job in just 6 months.",
//   },
//   {
//     name: "Michael Chen",
//     role: "Data Analyst",
//     avatar: userIcon,
//     content:
//       "The data science curriculum was comprehensive and up-to-date. The projects helped me build a portfolio that impressed employers during interviews.",
//   },
//   {
//     name: "Emily Rodriguez",
//     role: "Marketing Manager",
//     avatar: userIcon,
//     content:
//       "The digital marketing course provided actionable strategies that I implemented immediately. Our company's online presence has grown significantly as a result.",
//   },
// ];

// const Testimonials = () => {
//   return (
//     <section id="testimonials" className="w-full py-12 md:py-24 bg-muted/50">
//       <div className="container px-4 md:px-6">
//         <div className="flex flex-col items-center justify-center space-y-4 text-center">
//           <div className="space-y-2">
//             <h2 className="text-4xl font-bold sm:text-4xl md:text-5xl text-red-900">
//               Student Success Stories
//             </h2>
//             <p className="max-w-[900px] text-muted-foreground md:text-xl mt-5">
//               Hear from our students who have transformed their careers through our courses.
//             </p>
//           </div>
//         </div>

//         {/* Testimonials List */}
//         <div className="flex flex-col gap-10 mt-10">
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className="space-y-4">
//               <div className="flex items-center gap-4">
//                 <img
//                   src={testimonial.avatar || "/placeholder.svg"}
//                   alt={testimonial.name}
//                   className="rounded-full object-cover w-[50px] h-[50px]"
//                 />
//                 <div>
//                   <h3 className="text-lg font-semibold">{testimonial.name}</h3>
//                   <p className="text-sm text-muted-foreground">{testimonial.role}</p>
//                 </div>
//               </div>
//               <p className="text-muted-foreground">{testimonial.content}</p>
//               <div className="flex justify-end">
//                 {[...Array(5)].map((_, i) => (
//                   <Star
//                     key={i}
//                     className="h-4 w-4 text-yellow-400 fill-yellow-400"
//                   />
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;



import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import student from "../assets/images/image.webp";
import userIcon from '../assets/images/userIcon.png';
import { GrLinkedin } from "react-icons/gr";


const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Web Developer",
    content: "The web development course completely transformed my career. I went from knowing nothing about coding to landing a full-time developer job in just 6 months. When I started, even basic HTML tags felt intimidating. But the course structure made everything approachable — from the fundamentals of web design to building complex applications with JavaScript, React, and Node.js Each module built upon the last, and the hands-on projects helped solidify every concept. I especially appreciated the real-world assignments — like building a weather app, an e-commerce site, and integrating APIs — which made me feel like I was already working in the industry.",

    avatar: userIcon,
  },
  {
    name: "Michael Chen",
    role: "Data Analyst",
    content:
      "The data science curriculum was comprehensive and practical. Building a portfolio with real projects gave me a competitive edge during job applications. I wasn’t just learning theory — I was applying concepts like regression analysis, machine learning, and data visualization using real datasets.By the end of the course, I had a polished portfolio, a GitHub profile full of meaningful work, and a renewed sense of confidence. Within weeks of graduating, I landed a data analyst role and have been thriving ever since.",
    avatar: userIcon,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Manager",
    content:
      "The digital marketing course provided me with strategies I could immediately apply at work. It helped elevate our brand presence significantly. From SEO fundamentals to advanced social media campaigns, the curriculum was well-structured and aligned with current industry practices.Weekly feedback from mentors helped me refine my approach and build confidence in running A/B tests, optimizing ads, and using tools like Google Analytics and Meta Ads Manager effectively. I even revamped our company’s entire email marketing funnel based on what I learned.",
    avatar: userIcon,
  },
];

const Testimonial = () => {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 bg-muted/50">
    <div className="bg-blue-50 min-h-screen px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl text-center mb-4 font-bold">Success Stories</h1>
        <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">
          Hear from our students who have transformed their careers through our courses.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Testimonial Swiper Section */}
          <div className="bg-orange-50 rounded-lg shadow-md border p-3 relative">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              loop={true}
              className="testimonial-swiper"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  {({ isActive }) => {
                    const [showFullText, setShowFullText] = React.useState(false);
                    const contentPreview = testimonial.content.slice(0, 200);

                    return (
                      <>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <img
                              src={testimonial.avatar || "/placeholder.svg"}
                              alt={testimonial.name}
                              className="w-[50px] h-[50px] rounded-full object-cover border border-gray-300"
                            />
                            <div className="flex flex-col space-y-1">
                              {/* Name with LinkedIn Icon */}
                              <div className="flex flex-col space-y-1">
                                {/* Name with LinkedIn Icon */}
                                <div className="flex items-center space-x-2 text-gray-900 text-2xl font-semibold">
                                  <span>{testimonial.name}</span>
                                  <a
                                    href={testimonial.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600"
                                  >
                                    <GrLinkedin />
                                  </a>


                                </div>

                                {/* Role with LinkedIn Icon */}
                                <div className="flex items-center space-x-2 text-black text-lg">

                                  <span>{testimonial.role}</span>
                                </div>
                              </div>

                            </div>

                          </div>
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className="text-yellow-400 text-xl">★</span>
                            ))}
                          </div>
                        </div>

                        <p className="text-gray-700 text-base leading-relaxed">
                          {showFullText ? testimonial.content : `${contentPreview}...`}
                        </p>
                        <button
                          onClick={() => setShowFullText(!showFullText)}
                          className="mt-3 text-white hover:underline text-sm font-medium bg-blue-700 w-20 h-10 rounded-2xl"
                        >
                          {showFullText ? " Less" : "More"}
                        </button>
                      </>
                    );
                  }}
                </SwiperSlide>

              ))}
            </Swiper>


            {/* Arrows inside card */}
            <div className="flex justify-center gap-4 mt-4">
              <button className="custom-prev p-2 rounded-full border border-red-500 hover:bg-red-500 hover:text-white transition-all">
                <ArrowLeft size={20} />
              </button>
              <button className="custom-next p-2 rounded-full border border-red-500 hover:bg-red-500 hover:text-white transition-all">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <img
              src={student}
              alt="student"
              className="rounded-lg w-full h-[500px] object-cover"


            />
            <div className="absolute bottom-4 left-4 bg-white p-3 shadow-md rounded-md flex items-center space-x-2">
              <span className="text-red-600 font-bold text-xl">5K+</span>
              <span className="text-gray-700 text-sm">Satisfied Students</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Testimonial;
