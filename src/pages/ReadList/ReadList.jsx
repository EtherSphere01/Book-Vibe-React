import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import CommonBook from "../CommonBook/CommonBook";

const ReadList = ({ sortRead }) => {
  return (
    <div>
      <div>
        {sortRead.map((book) => (
          <CommonBook key={book.bookId} book={book}></CommonBook>
        ))}
      </div>
    </div>
  );
};

export default ReadList;
