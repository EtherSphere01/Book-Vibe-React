import React, { useEffect, useState } from "react";
import { getStoredBook } from "../../utility/addtoDB";
import CommonBook from "../CommonBook/CommonBook";

const WishList = ({ books }) => {
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    const storeBooks = getStoredBook("wishList");
    const newList = storeBooks.map((id) => parseInt(id));

    const filteredBooks = books.filter((book) => newList.includes(book.bookId));
    setFilter(filteredBooks);
  }, []);
  return (
    <div>
      <div>
        {filter.map((book) => (
          <CommonBook key={book.bookId} book={book}></CommonBook>
        ))}
      </div>
    </div>
  );
};

export default WishList;
