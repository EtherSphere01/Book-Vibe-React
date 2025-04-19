import React, { useEffect, useState } from "react";
import CommonBook from "../CommonBook/CommonBook";

const WishList = ({ sortWish }) => {
  return (
    <div>
      <div>
        {sortWish.map((book) => (
          <CommonBook key={book.bookId} book={book}></CommonBook>
        ))}
      </div>
    </div>
  );
};

export default WishList;
