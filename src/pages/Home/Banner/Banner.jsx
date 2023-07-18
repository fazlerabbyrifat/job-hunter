/* eslint-disable no-unused-vars */
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  const dynamicText = [
    {
      header: "Job Hunter - Where your dreams come true",
      text: "Job hunter is a job seeking platform for Bangladeshi Job Seekers",
    },
    {
      header: "Job Hunter - Create Your Profile",
      text: "Are you a job seeker? Then quickly create your profile in Job Hunter",
    },
    {
      header: "Job Hunter - Wanna Hire Employees?",
      text: "This is the platform for both employer and employees",
    },
    // Add more dynamic texts here
  ];
  const itemList = [["Developer", "Designer"], ["Recruiter", "Content-writer"], ["Seo Expert", "Problem-solver"]];

  return (
    <div className="md:w-2/3 mx-auto mt-20">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
      >
        {dynamicText.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row-reverse md:items-center md:h-[420px] p-6 md:gap-10 bg-gray-200">
            <div className="flex-1 md:order-2 md:w-1/2 md:text-left">
              <h1 className="text-3xl font-bold uppercase text-accent">{item.header}</h1>
              <p className="text-xl font-medium">{item.text}</p>
            </div>
            <div className="flex-1 p-6 space-y-2 md:w-1/2 md:text-left">
              <h3 className="text-3xl font-bold mb-5">Our Job category</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {itemList[index].map((item, idx) => (
                  <p key={idx} className="text-gray-800 border-2 border-teal-400 rounded-lg p-5 text-xl font-semibold">{item}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
