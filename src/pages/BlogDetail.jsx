import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      title: "Why Soft Skills Matter in Tech Training",
      author: "Burhan Shaikh",
      date: "April 8, 2025",
      description:
        "Discover how mastering communication, time management, and teamwork boosts your tech career.",
      content:
        "Soft skills are essential in the tech industry, not just for communication but also for effective teamwork, time management, and problem-solving. These skills help you work better in teams, deliver projects efficiently, and adapt to changes quickly. In this blog, we’ll explore why every aspiring tech professional should invest time in mastering soft skills along with technical skills.",
      image: "https://source.unsplash.com/featured/?teamwork",
    },
    {
      id: 2,
      title: "Top 5 Courses to Learn DevOps in 2025",
      author: "Trainer Team",
      date: "April 3, 2025",
      description:
        "Explore the best courses to master CI/CD, Docker, Kubernetes, and cloud infrastructure.",
      content:
        "The world of DevOps is vast, and choosing the right courses can boost your career immensely. In this blog, we’ve handpicked the top 5 courses that offer hands-on learning, cover tools like Jenkins, Docker, Kubernetes, Terraform, and even Cloud Platforms like AWS and Azure.",
      image: "https://source.unsplash.com/featured/?devops",
    },
    {
      id: 3,
      title: "How to Choose the Right Career Path in IT",
      author: "Career Coach",
      date: "March 28, 2025",
      description:
        "Struggling to choose between Web Dev, Cloud, or Data? Here’s a guide to find your fit.",
      content:
        "There are multiple career paths in IT — Web Development, Cloud Engineering, Data Science, and more. This blog helps you understand which path suits you best based on your interest, strengths, and future trends.",
      image: "https://source.unsplash.com/featured/?career",
    },
  ];

  const blog = blogPosts.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="text-center py-20 text-xl text-red-500">
        Blog not found 😕
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <button
        className="mb-6 text-blue-600 hover:underline"
        onClick={() => navigate(-1)}
      >
        ← Back to Blog
      </button>
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-64 object-cover rounded-xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6 text-gray-800">{blog.title}</h1>
      <p className="text-sm text-gray-500 mt-1">
        By {blog.author} · {blog.date}
      </p>
      <p className="mt-6 text-gray-700 leading-relaxed">{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
