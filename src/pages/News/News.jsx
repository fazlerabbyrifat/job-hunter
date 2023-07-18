/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Rating from "react-rating";

const News = () => {
  const [allNews, setAllNews] = useState([]);

  const currentDate = new Date();
  const date = currentDate.toLocaleDateString();

  useEffect(() => {
    fetch("/courses.json")
      .then((res) => res.json())
      .then((data) => setAllNews(data));
  }, []);

  return (
    <div className="lg:px-20 my-10">
      <h1 className="text-3xl font-bold uppercase text-center mb-10">
        Latest News
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allNews?.map((news) => (
          <div key={news?.id} className="border rounded-lg p-4 shadow-lg">
            <img
              src={news?.image}
              alt={news?.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <h2 className="text-2xl font-bold mt-5">{news?.title}</h2>
            <p className="text-gray-600 text-xl font-semibold">
              Instructor: {news?.instructor}
            </p>
            <p className="mt-2">{news?.description}</p>
            <p className="text-green-600 font-bold mt-2">${news?.price}</p>
            <div className="flex items-center justify-between mt-2">
              <Rating
                initialRating={news?.rating}
                readonly
                emptySymbol={<span className="text-gray-400">☆</span>}
                fullSymbol={<span className="text-yellow-500">★</span>}
              />
              <span className="text-gray-600">
                Course Duration: {news?.duration} days
              </span>
            </div>
            <div className="mt-2 text-gray-500">
              <small>
                <p>News posted on: {date}</p>
              </small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
