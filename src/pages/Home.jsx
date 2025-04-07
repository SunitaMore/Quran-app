import FeaturedCourse from "../components/FeaturedCourse";
import userIcon from '../assets/images/UserIcon.png';

import { Button } from "../components/ui-components";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui-components";
import { Badge } from "../components/ui-components";
import { BookOpen, Clock, GraduationCap, Users, CheckCircle, ArrowRight, Star, UserIcon } from "lucide-react"
import heroImage from "../assets/images/hero_section.png"; // ✅ No curly braces
import { Element } from 'react-scroll';
export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-15">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="inline-block" variant="secondary">
                    New Courses Available
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Learn Without Limits
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Start, switch, or advance your career with thousands of courses from expert instructors.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="px-8">
                    Explore Courses
                  </Button>
                  <Button size="lg" variant="outline">
                    Try for Free
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Expert instructors</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Flexible learning</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Certificates</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={heroImage}
                  alt="Hero Image"
                  className="rounded-lg object-cover w-full h-[400px]"
                />
              </div>
            </div>
          </div>
        </section>

    <Element name="courses">    <FeaturedCourse/></Element>
        {/* Features */}
        <section id="features" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose EduLearn</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Our platform offers everything you need to succeed in your learning journey.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground mt-2">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Student Success Stories</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Hear from our students who have transformed their careers through our courses.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="pb-2 bg-gray-100">
                    <div className="flex items-center gap-4 bg-gray-100">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="rounded-full object-cover w-[50px] h-[50px]"
                      />
                      <div>
                        <CardTitle className="text-lg ">{testimonial.name}</CardTitle>
                        <CardDescription>{testimonial.role}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="bg-gray-100">
                    <p className="text-muted-foreground bg-gray-100">{testimonial.content}</p>
                  </CardContent>
                  <CardFooter className="pt-0 bg-gray-100">
                  <div className="flex">
  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
</div>

                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>


        {/* CTA */}
        <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Start Learning?
                </h2>
                <p className="max-w-[900px] md:text-xl">Join thousands of students already learning on our platform.</p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="px-8">
                  Sign Up Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6" />
            <span className="text-xl font-bold">EduLearn</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </a>
            <a href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Courses
            </a>
            <a href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Pricing
            </a>
            <a href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} EduLearn. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

const features = [
  {
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of real-world experience.",
    icon: <Users className="h-6 w-6 text-primary" />,
  },
  {
    title: "Flexible Learning",
    description: "Study at your own pace, anywhere and anytime that suits your schedule.",
    icon: <Clock className="h-6 w-6 text-primary" />,
  },
  {
    title: "Practical Projects",
    description: "Apply your knowledge with hands-on projects that build your portfolio.",
    icon: <BookOpen className="h-6 w-6 text-primary" />,
  },
  {
    title: "Recognized Certificates",
    description: "Earn certificates that are recognized by top employers worldwide.",
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
  },
  {
    title: "Community Support",
    description: "Join a community of learners and get help whenever you need it.",
    icon: <Users className="h-6 w-6 text-primary" />,
  },
  {
    title: "Lifetime Access",
    description: "Pay once and access your course content forever, including updates.",
    icon: <CheckCircle className="h-6 w-6 text-primary" />,
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Web Developer",
    avatar: userIcon,
    content:
      "The web development course completely transformed my career. I went from knowing nothing about coding to landing a full-time developer job in just 6 months.",
  },
  {
    name: "Michael Chen",
    role: "Data Analyst",
    avatar: userIcon,
    content:
      "The data science curriculum was comprehensive and up-to-date. The projects helped me build a portfolio that impressed employers during interviews.",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Manager",
    avatar: userIcon,
    content:
      "The digital marketing course provided actionable strategies that I implemented immediately. Our company's online presence has grown significantly as a result.",
  },
]
