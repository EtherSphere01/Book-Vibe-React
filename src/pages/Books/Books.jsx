import React, { Suspense, useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = ({ books }) => {
  return (
    <div>
      <Suspense
        fallback={
          <div className="text-center text-3xl font-bold">Loading...</div>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {books.map((book) => (
            <Book key={book.id} book={book}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
