import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui-components";
import {
  BookOpen,
  Clock,
  GraduationCap,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
} from "lucide-react";
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
];

const Testimonials = () => {
  return (
    <>
      {/* Testimonials */}
      <section id="testimonials" className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Student Success Stories
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Hear from our students who have transformed their careers
                through our courses.
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
                      <CardTitle className="text-lg">
                        {testimonial.name}
                      </CardTitle>
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
    </>
  );
};

export default Testimonials;
