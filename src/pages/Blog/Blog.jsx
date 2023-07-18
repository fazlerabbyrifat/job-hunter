/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Footer from "../shared/Footer";

const Blog = () => {
  const [articles, setArticles] = useState([]);

  const handleReadMore = (index) => {
    const newArticles = [...articles];
    newArticles[index].showFullDescription = true;
    setArticles(newArticles);
  };

  useEffect(() => {
    const apiKey = import.meta.env.VITE_NEWS_API_KEY;
    fetch(
      `https://newsapi.org/v2/everything?q=tesla&from=2023-06-18&sortBy=publishedAt&apiKey=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.articles));
  }, []);

  return (
    <>
      <div className="my-15 bg-gray-200">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mt-5 text-center">
          Latest TechCrunch Articles
        </h1>
        <div className="grid grid-cols-1 p-3 lg:p-8 gap-5">
          {articles.slice(0, 10).map((article, index) => (
            <div
              key={article.index}
              className="border p-4 mb-4 bg-cover bg-center relative rounded-lg"
              style={{
                backgroundImage: `url(${article.urlToImage})`,
                height: "650px",
              }}
            >
              <div className="bg-white bg-opacity-80 p-4 absolute bottom-0 left-0 right-0">
                <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                <p>
                  <small>Published At: {article.publishedAt}</small>
                </p>
                <p>{article.author}</p>
                <p>{article.content}</p>
                {article.showFullDescription ? (
                  <>
                    <p>{article.description}</p>
                  </>
                ) : (
                  <>
                    <p>{`${article.description.slice(0, 150)}...`}</p>
                    <button
                      onClick={() => handleReadMore(index)}
                      className="text-blue-500 font-bold cursor-pointer"
                    >
                      Read More
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Blog;
