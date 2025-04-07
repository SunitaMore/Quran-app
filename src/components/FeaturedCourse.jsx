import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui-components";
import { Button } from "../components/ui-components";
import { Badge } from "../components/ui-components";
import { BookOpen, Clock, GraduationCap, Users, CheckCircle, ArrowRight, Star } from "lucide-react"
// Sample data
const courses = [
    {
      title: "Introduction to Web Development",
      description: "Learn the fundamentals of HTML, CSS, and JavaScript to build modern websites.",
      image: "/placeholder.svg?height=225&width=400",
      category: "Development",
      duration: "8 weeks",
      lessons: 24,
      students: "2.5k+",
      rating: 4.8,
      price: "$49.99",
    },
    {
      title: "Data Science Fundamentals",
      description: "Master the basics of data analysis, visualization, and machine learning.",
      image: "/placeholder.svg?height=225&width=400",
      category: "Data Science",
      duration: "10 weeks",
      lessons: 32,
      students: "1.8k+",
      rating: 4.7,
      price: "$59.99",
    },
    {
      title: "Digital Marketing Masterclass",
      description: "Learn proven strategies for growing your business online.",
      image: "/placeholder.svg?height=225&width=400",
      category: "Marketing",
      duration: "6 weeks",
      lessons: 18,
      students: "3.2k+",
      rating: 4.9,
      price: "$44.99",
    },
    {
      title: "UX/UI Design Principles",
      description: "Create beautiful, user-friendly interfaces that people love to use.",
      image: "/placeholder.svg?height=225&width=400",
      category: "Design",
      duration: "8 weeks",
      lessons: 22,
      students: "1.5k+",
      rating: 4.6,
      price: "$54.99",
    },
  ]

  
const FeaturedCourse = () => {
  return (
    <div>{/* Featured Courses */}
    <section id="courses" className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Courses</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Explore our most popular courses and start your learning journey today.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
          {courses.map((course, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="object-cover w-full h-48"
                />
                <Badge className="absolute top-2 right-2">{course.category}</Badge>
              </div>
              <CardHeader className="p-4">
                <CardTitle className="line-clamp-1">{course.title}</CardTitle>
                <CardDescription className="line-clamp-2">{course.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    <span>{course.lessons} lessons</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <Star className="h-4 w-4 fill-muted text-muted" />
                  <span className="ml-2 text-sm font-medium">{course.rating}</span>
                </div>
                <span className="font-bold">{course.price}</span>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button variant="outline" className="gap-1">
            View All Courses <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section></div>
  )
}

export default FeaturedCourse