import React from "react";

// Images
import WebImg from "../assets/Images/web.png";
import GraphicImg from "../assets/Images/Graphic01.png";
import JavaImg from "../assets/Images/java01.png";
import AndroidImg from "../assets/Images/Android.png"
import Datascience from "../assets/Images/Datascience.png"
import Python from "../assets/Images/Python.png"
import Dataanalytics from "../assets/Images/Dataanalytics.png"
import Securityanalyst from "../assets/Images/Securityanalyst.png"
import Cloudcomputing from "../assets/Images/Cloudcomputing.png"
import { Link } from "react-router-dom";


// Internship data (TEXT SAME)
const internships = [
  {
    title: "Web Development",
    img: WebImg,
    desc: `The Web Development internship offers practical work experience and an introduction to creating and improving web-based systems. This internship will involve challenging opportunities, real world projects. It’s a fantastic opportunity to gain hands-on experience in the web and/or app development field with an award-winning innovation team.`,
  },
  {
    title: "Graphic Design",
    img: GraphicImg,
    desc: `With a graphic design internship, you will be involved in projects that focus on nearly every aspect of a business’s visual design strategies. Your internship tasks may include creating graphic and video content, template design, web design work, and many more exciting tasks. Plus our graphic design internships range in industries, so we work with you to find one that best matches your career goals.`,
  },
  {
    title: "Java Programming",
    img: JavaImg,
    desc: `Master the Fundamentals of Programming in Java from the comfort of your home and get certified to apply for great job opportunities. A with 4-week comprehensive Internship program where you will learn right from development to deployment of web applications made using Java. Get first-hand exposure to working in the real world, build your professional network, integrate classroom knowledge and theory with practical application and skills developed in professional or community settings.`,
  },

   {
    title: "Android Development",
    img: AndroidImg,
    desc: `Android is an open source Operating for mobile application development.Now a days people continuously shifting to mobile devices to access internet application and other important tasks.which is more easy than to work on PC.It it best choice to getting started your first App with OASIS INFOBYTE.`,
  },

   {
    title: "Data Science",
    img: Datascience,
    desc: `Remote data science internships are a unique chance to gain experience in the midst of the virtual workforce while remaining immersed in one of the top organizations in the field. Data analysis internships are some of the most competitive and popular within the broader data science field.`,
  },
    {
    title: "Python Programming",
    img: Python,
    desc: `Enroll in our intensive 4-week internship program to become proficient in Python programming, all within the convenience of your home. Acquire the essential skills and expertise to pursue exciting job prospects in this field. Throughout the program, you'll delve into various aspects, spanning from web development to deploying Python-driven web applications. Achieve certification and elevate your career possibilities. Seize this chance to excel in Python programming – it's not to be missed!`,
  },


   {
    title: "Data Analytics",
    img: Dataanalytics,
    desc: `Immerse yourself in the realm of data with our internship at Oasis Infobyte. This hands-on experience provides real-world projects, challenges, and exposure to cutting-edge analytics. Join our award-winning team, contribute to impactful initiatives, and gain practical insights into the dynamic field of data analytics`,
  },

   {
    title: "Security Analyst",
    img: Securityanalyst,
    desc: ` Step into the realm of cybersecurity with our internship at Oasis Infobyte. This hands-on experience features real-world projects, challenges, and exposure to cutting-edge security practices. Join our esteemed cybersecurity team, contribute to impactful initiatives, and gain practical insights into the dynamic field of cybersecurity. Apply now for a transformative journey into the heart of cybersecurity innovation!`,
  },
   {
    title: "Cloud Computing",
    img: Cloudcomputing,
    desc: `Explore the world of cloud computing in our internship at Oasis Infobyte. Immerse yourself in real-world projects, challenges, and the latest cloud technologies. Join our dynamic cloud computing team, contribute to impactful initiatives, and gain practical insights into this evolving field. Apply now for a transformative experience at the forefront of cloud computing innovation!`,
  },
];

export default function Internship() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-semibold text-purple-600 mb-12 relative inline-block">
          Our Internships
          <span className="absolute -left-6 top-0 w-6 h-6 border-l-4 border-t-4 border-purple-500"></span>
          <span className="absolute -right-6 -bottom-2 w-6 h-6 border-r-4 border-b-4 border-purple-500"></span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {internships.map((item, index) => (
            <div
              key={index}
              className="
    bg-white
    border border-[rgb(0_0_0_/20%)]
    rounded-[1rem]
    shadow-md
    transition-shadow duration-300
    hover:shadow-xl
    flex flex-col p-5
  "
            >

              {/* Image */}
              <div className="flex justify-center">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-40 h-28 object-contain floating-img"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-center ">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm text-center leading-relaxed px-2 ">
                {item.desc}
              </p>

              {/* Button */}
              <div className="mt-4 text-center">
  <Link to="/contact">
    <button
      className="
        bg-purple-600
        text-white
        px-6
        py-2
        rounded-full
        hover:bg-purple-700
        transition
      "
    >
      Apply Now
    </button>
  </Link>
</div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
