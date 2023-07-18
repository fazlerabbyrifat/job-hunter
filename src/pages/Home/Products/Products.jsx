/* eslint-disable no-unused-vars */
import React from "react";
import courseImg1 from "../../../assets/courses/course1.jpg";
import courseImg2 from "../../../assets/courses/course2.jpg";
import courseImg3 from "../../../assets/courses/course3.jpg";
import courseImg4 from "../../../assets/courses/course4.jpg";
import courseImg5 from "../../../assets/courses/course5.jpg";
import courseImg6 from "../../../assets/courses/course6.jpg";

const Products = () => {
  const courses = [
    {
      id: 1,
      image: courseImg1,
      title: "Web Development",
      instructor: "Jhankar Mahbub",
      description:
        "Learn the fundamentals of web development and build responsive websites.",
      price: 49.99,
    },
    {
      id: 2,
      image: courseImg2,
      title: "UX/UI Design",
      instructor: "Ontor Shamim",
      description:
        "Master the principles of user experience and create stunning user interfaces.",
      price: 59.99,
    },
    {
      id: 3,
      image: courseImg3,
      title: "Data Science",
      instructor: "Sadika Jahan",
      description:
        "Explore the world of data science and leverage the power of data.",
      price: 69.99,
    },
    {
      id: 4,
      image: courseImg4,
      title: "Digital Marketing",
      instructor: "Sarah Jebin",
      description:
        "Become a digital marketing expert and reach a wider audience.",
      price: 54.99,
    },
    {
      id: 5,
      image: courseImg5,
      title: "Mobile App Development",
      instructor: "Rifat Jahan",
      description:
        "Build interactive mobile apps for both iOS and Android platforms.",
      price: 64.99,
    },
    {
      id: 6,
      image: courseImg6,
      title: "Graphic Design",
      instructor: "Abrar Fahim",
      description:
        "Unlock your creativity with graphic design and create captivating visuals.",
      price: 49.99,
    },
  ];
  return (
    <div className="px-20 my-10">
      <h1 className="text-5xl font-bold text-center uppercase mb-10">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <div key={course.id} className="border rounded-lg p-4">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h2 className="text-xl font-bold mt-2">{course.title}</h2>
            <p className="text-gray-600">{course.description}</p>
            <p className="text-green-600 font-bold mt-2">${course.price}</p>
            <button className="btn btn-accent text-white px-4 py-2 mt-4 rounded-lg">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
