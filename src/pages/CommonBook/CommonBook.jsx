import React from "react";
import { GrLocation } from "react-icons/gr";
import { GoPeople } from "react-icons/go";
import { LuFileSpreadsheet } from "react-icons/lu";
import { Link } from "react-router";

const CommonBook = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    tags,
    image,
    rating,
    review,
    publisher,
    totalPages,
    category,
    yearOfPublishing,
  } = book;

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-sm rounded-2xl my-8 flex flex-col md:flex-row">
        <div className="p-5 bg-white">
          <div className="bg-gray-100  flex items-center justify-center h-80 rounded-2xl p-5">
            <figure className="rounded-none">
              <img
                src={image}
                alt="books"
                className="h-70 rounded-none  object-cover w-full"
              />
            </figure>
          </div>
        </div>
        <div className="card-body content-text gap-y-6">
          <h2 className="card-title text-2xl heading-text">{bookName}</h2>
          <div className="">
            <p>
              By : <span>{author}</span>
            </p>
          </div>

          <div className="">
            <div>
              <p className="py-2">
                <span className="font-bold">Tag : </span>
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className="badge badge-outline border-none text-[#23BE0A] font-bold rounded-4xl"
                  >
                    #{tag}
                  </div>
                ))}
              </p>
              <p className="py-1">
                <span className="flex gap-2 items-center">
                  <GrLocation /> Year of Publishing : {yearOfPublishing}
                </span>
              </p>
            </div>

            <div className="border-b-2 border-gray-200 py-3">
              <p className="md:flex gap-5">
                <span className="flex gap-2 items-center">
                  <GoPeople />
                  Publisher : {publisher}
                </span>
                <span className="flex gap-2 items-center">
                  <LuFileSpreadsheet />
                  Page {totalPages}
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between md:justify-start md:gap-25 ">
            <div>
              <p className="text-blue-400">
                <span>Category: {category}</span>
              </p>
            </div>
            <div>
              <p className="text-orange-400">
                <span>Rating: {rating}</span>
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <Link to={`/bookDetails/${bookId}`}>
                <button className="btn border-none rounded-4xl text-white bg-[#23BE0A] ">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonBook;
