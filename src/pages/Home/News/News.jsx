/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import { Link } from "react-router-dom";

const News = () => {
  const [allNews, setAllNews] = useState([]);

  useEffect(() => {
    fetch("/courses.json")
      .then((res) => res.json())
      .then((data) => setAllNews(data));
  }, []);

  return (
    <div className="lg:px-20 my-10">
      <h1 className="text-3xl font-bold uppercase text-center mb-10">
        Latest Information About Our Courses
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
            allNews?.slice(0,3).map(news => <NewsCard key={news?.id} news={news}></NewsCard>)
        }
      </div>
        <div className="flex justify-center">
        <Link>
          <button className="btn btn-warning mt-4">
            See More
          </button>
        </Link>
        </div>
    </div>
  );
};

export default News;
