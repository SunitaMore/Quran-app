import React from "react";

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

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-10 text-center">Our Training Blog</h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-2xl shadow p-5 hover:shadow-lg transition-all">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover rounded-xl"
            />
            <h2 className="text-xl font-semibold mt-4">{post.title}</h2>
            <p className="text-gray-500 text-sm">
              By {post.author} · {post.date}
            </p>
            <p className="text-gray-700 mt-2">{post.description}</p>
            <button className="mt-4 text-blue-600 hover:underline">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;