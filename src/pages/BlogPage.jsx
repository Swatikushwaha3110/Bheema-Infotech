import React from "react";
import Footer from "../components/Footer";

const BlogPage = () => {
  const posts = [
    {
      title: "Why Digital Transformation is Essential for Small Businesses in 2025",
      img: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=2",
      desc: "Technology is no longer optional. Automation, AI and modern IT unlock speed, scale, and better customer experience.",
      tag: "Strategy",
    },
    {
      title: "Top 5 Benefits of Custom Software Development",
      img: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
      desc: "Move beyond limits of off-the-shelf tools—own your roadmap, integrate faster, and scale with confidence.",
      tag: "Engineering",
    },
    {
      title: "How a Professional Website Builds Trust & Boosts Sales",
      img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      desc: "Your site is your digital office—design, performance and content directly impact credibility and conversion.",
      tag: "Web",
    },
    {
      title: "From Idea to MVP: A Practical Launch Checklist",
      img: "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg",
      desc: "Scope ruthlessly, validate early, and instrument analytics from day one to ship smarter.",
      tag: "Product",
    },
    {
      title: "QA Best Practices: Ship Faster Without Breaking Things",
      img: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg",
      desc: "Automated tests, CI pipelines, and clear test ownership reduce cost of change and release risk.",
      tag: "Quality",
    },
    {
      title: "SEO Foundations for B2B Tech",
      img: "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg",
      desc: "Technical hygiene + helpful content + intent mapping = sustainable organic growth.",
      tag: "Marketing",
    },
  ];

  return (
    <div className="w-full flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center">
        <img
          src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=2"
          alt="Hero Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/80"></div>

        <div className="relative text-center text-white px-6 max-w-4xl">
          <h2 className="text-xl uppercase tracking-wide text-yellow-400">
            Welcome to Our Blog
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold mt-2">
            Explore Knowledge & Insights
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Stay updated with the latest updates, strategies and technology trends.
          </p>
        </div>

        {/* Floating Card */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[90%] md:w-[70%]">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-3">Our Blogs</h2>
            <p className="text-gray-600">
              Handpicked articles on digital transformation, software, web, and
              business growth strategies.
            </p>
          </div>
        </div>
      </section>

      {/* BLOG CARDS */}
      <section className="mt-32 max-w-7xl mx-auto px-6 flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition duration-500"
            >
              <div className="h-64 w-full overflow-hidden rounded-t-2xl">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-blue-600 uppercase">
                  {post.tag}
                </span>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.desc}</p>
                <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-yellow-400 hover:text-blue-900 transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

     
    </div>
  );
};

export default BlogPage;
