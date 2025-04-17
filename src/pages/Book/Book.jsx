import React from "react";
import { Link } from "react-router";

const Book = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    tags,
    image,
    rating,
    review,
    publisher,
    category,
  } = book;

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div>
        <div className="card bg-base-100 shadow-sm border-gray-500">
          <div className="p-5 bg-white">
            <div className="bg-gray-100  flex items-center justify-center h-90 rounded-2xl">
              <figure className="rounded-2xl">
                <img
                  src={image}
                  alt="books"
                  className="h-65 rounded-none w-full object-cover"
                />
              </figure>
            </div>
          </div>

          <div className="card-body heading-text">
            <div className="card-actions justify-start">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="badge badge-outline bg-green-100 border-none text-[#23BE0A] font-bold rounded-4xl"
                >
                  {tag}
                </div>
              ))}
            </div>
            <h2 className="card-title">{bookName}</h2>
            <p className="content-text">
              <span className="">By:</span> {author}
            </p>
            <div className="border-b-2 border-dashed opacity-10 pt-2 mb-2"></div>

            <div className="font-light flex justify-between ">
              <div>{category}</div>
              <div>
                <span className="flex items-center gap-2">
                  {rating}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-yellow-500 mr-1"
                  >
                    <path d="M12 .587l3.668 7.568L24 9.432l-6 5.849 1.417 8.268L12 18.896l-7.417 4.653L6 15.281 0 9.432l8.332-1.277L12 .587z" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
