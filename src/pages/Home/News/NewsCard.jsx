/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Rating from "react-rating";

const NewsCard = ({ news }) => {
  const { image, title, instructor, description, price, rating, duration } =
    news;
  const currentDate = new Date();
  const date = currentDate.toLocaleDateString();

  return (
    <div className="border rounded-lg p-4">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h2 className="text-xl font-bold mt-5">{title}</h2>
      <p className="text-gray-600">Instructor: {instructor}</p>
      <p className="mt-2">{description}</p>
      <p className="text-green-600 font-bold mt-2">${price}</p>
      <div className="flex items-center mt-2">
        <Rating
          initialRating={rating}
          readonly
          emptySymbol={<span className="text-gray-400">☆</span>}
          fullSymbol={<span className="text-yellow-500">★</span>}
        />
        <span className="text-gray-600 ml-1">{duration} mins</span>
      </div>
      <div className="mt-2 text-gray-500">
        <small>
          <p>News posted on: {date}</p>
        </small>
      </div>
    </div>
  );
};

export default NewsCard;
