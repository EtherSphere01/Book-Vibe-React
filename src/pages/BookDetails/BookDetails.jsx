import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const book = useLoaderData();
  const BookId = parseInt(id);
  const bookDetails = book.find((book) => book.bookId === BookId);

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
  } = bookDetails;
  return (
    <div className="my-10">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="mh-auto mx-auto bg-gray-100 rounded-2xl flex-1 ">
          <figure className="">
            <img src={image} alt="Movie" className=" object-contain p-10 " />
          </figure>
        </div>
        <div className="flex-2 items-start content-text">
          <h2 className="card-title heading-text text-5xl">{bookName}</h2>
          <p className="text-xl content-text">By: {author}</p>
          <div className="border-b-2 border-dashed opacity-100"></div>
          <p className="text-sm content-text">{category}</p>
          <div className="border-b-2 border-dashed opacity-100"></div>
          <p className="">
            <span className="font-bold">Review: </span>
            {review}
          </p>
          <p>
            {" "}
            <span className="font-bold">Tag: </span>
            {tags.map((tag, index) => (
              <div
                key={index}
                className="badge badge-outline bg-green-100 border-none text-[#23BE0A] font-bold rounded-4xl"
              >
                {tag}
              </div>
            ))}
          </p>
          <div className="border-b-2 border-dashed opacity-100"></div>
          <div>
            <p>
              <span className="pr-20 opacity-50">Number of Pages:</span>
              <span className="font-bold">{totalPages}</span>
            </p>
            <p>
              <span className="pr-20 opacity-50">Number of Pages:</span>
              <span className="font-bold">{publisher}</span>
            </p>
            <p>
              <span className="pr-20 opacity-50">Number of Pages:</span>
              <span className="font-bold">{yearOfPublishing}</span>
            </p>
            <p>
              <span className="pr-20 opacity-50">Number of Pages:</span>
              <span className="font-bold">{rating}</span>
            </p>
          </div>
          <div className="card-actions justify-start">
            <button className="btn border-gray-400">Read</button>
            <button className="btn bg-[#50B1C9] text-white">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
