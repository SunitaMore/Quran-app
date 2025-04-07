import FeaturedCourse from "../components/FeaturedCourse";
import Navbar from "../components/Navbar";
import { Button } from "../components/ui-components";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui-components";
import { Badge } from "../components/ui-components";
import { BookOpen, Clock, GraduationCap, Users, CheckCircle, ArrowRight, Star } from "lucide-react"
import heroImage from "../assets/images/hero_section.png"; // ✅ No curly braces

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            
            <span className="text-xl font-bold">IT course</span>
          </div>
         <Navbar/>
          <div className="flex items-center gap-4">
            <a href="/login" className="text-sm font-medium hover:text-primary">
              Log in
            </a>
            <Button>Get Started</Button>
          </div>
        </div>
      </header>
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
    <FeaturedCourse/>

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
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="rounded-full object-cover w-[50px] h-[50px]"
                      />
                      <div>
                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                        <CardDescription>{testimonial.role}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{testimonial.content}</p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <div className="flex">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <Star className="h-4 w-4 fill-primary text-primary" />
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Simple, Transparent Pricing
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Choose the plan that's right for you and start learning today.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mt-8">
              {pricingPlans.map((plan, index) => (
                <Card key={index} className={`flex flex-col ${plan.featured ? "border-primary shadow-lg" : ""}`}>
                  {plan.featured && (
                    <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant={plan.featured ? "default" : "outline"}>
                      Get Started
                    </Button>
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
    avatar: "/placeholder.svg?height=50&width=50",
    content:
      "The web development course completely transformed my career. I went from knowing nothing about coding to landing a full-time developer job in just 6 months.",
  },
  {
    name: "Michael Chen",
    role: "Data Analyst",
    avatar: "/placeholder.svg?height=50&width=50",
    content:
      "The data science curriculum was comprehensive and up-to-date. The projects helped me build a portfolio that impressed employers during interviews.",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Manager",
    avatar: "/placeholder.svg?height=50&width=50",
    content:
      "The digital marketing course provided actionable strategies that I implemented immediately. Our company's online presence has grown significantly as a result.",
  },
]

const pricingPlans = [
  {
    name: "Basic",
    description: "Perfect for beginners",
    price: 9.99,
    features: [
      "Access to 50+ courses",
      "Basic exercises",
      "Community support",
      "Course completion certificates",
      "7-day money-back guarantee",
    ],
    featured: false,
  },
  {
    name: "Pro",
    description: "Best for serious learners",
    price: 19.99,
    features: [
      "Access to all 200+ courses",
      "Advanced projects",
      "Priority support",
      "Industry-recognized certificates",
      "1-on-1 mentor sessions monthly",
      "30-day money-back guarantee",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    description: "For teams and organizations",
    price: 49.99,
    features: [
      "Everything in Pro plan",
      "Custom learning paths",
      "Team progress tracking",
      "Dedicated account manager",
      "API access",
      "Custom branding options",
    ],
    featured: false,
  },
]

