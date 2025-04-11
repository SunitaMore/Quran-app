import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Why Soft Skills Matter in Tech Training",
      author: "Burhan Shaikh",
      date: "April 8, 2025",
      description:
        "Discover how mastering communication, time management, and teamwork boosts your tech career.",
      image: "https://source.unsplash.com/featured/?teamwork",
    },
    {
      id: 2,
      title: "Top 5 Courses to Learn DevOps in 2025",
      author: "Trainer Team",
      date: "April 3, 2025",
      description:
        "Explore the best courses to master CI/CD, Docker, Kubernetes, and cloud infrastructure.",
      image: "https://source.unsplash.com/featured/?devops",
    },
    {
      id: 3,
      title: "How to Choose the Right Career Path in IT",
      author: "Career Coach",
      date: "March 28, 2025",
      description:
        "Struggling to choose between Web Dev, Cloud, or Data? Here’s a guide to find your fit.",
      image: "https://source.unsplash.com/featured/?career",
    },
  ];

  const [visibleCards, setVisibleCards] = useState([]);
  const observer = useRef();

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [
              ...new Set([...prev, entry.target.dataset.id]),
            ]);
          }
        });
      },
      { threshold: 0.2 }
    );
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll(".blog-card");
    cards.forEach((card) => {
      observer.current.observe(card);
    });
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-10 text-center">Our Training Blog</h1>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            data-id={post.id}
            className={`blog-card relative bg-white bg-opacity-30 backdrop-blur-md border border-white/10 shadow-xl overflow-hidden group transform transition-all duration-700 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] ${
              visibleCards.includes(post.id.toString())
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)",
            }}
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>

            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover rounded-t-[2rem]"
            />

            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                By {post.author} · {post.date}
              </p>
              <p className="text-gray-700 mt-3">{post.description}</p>

              <Link
                to={`/blog/${post.id}`}
                className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
