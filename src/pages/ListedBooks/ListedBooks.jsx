import React, { useEffect, useState } from "react";
import ReadList from "../ReadList/ReadList";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import WishList from "../WishList/WishList";
import { useLoaderData } from "react-router";
import { getStoredBook } from "../../utility/addtoDB";

const ListedBooks = () => {
  const books = useLoaderData();

  const [readBooks, setReadBooks] = useState([]);
  const [wishBooks, setWishBooks] = useState([]);

  const [sortRead, setSortRead] = useState(readBooks);
  const [sortWish, setSortWish] = useState(wishBooks);
  const [sortType, setSortType] = useState("Page");

  useEffect(() => {
    const storeBooks = getStoredBook("readList");
    const newList = storeBooks.map((id) => parseInt(id));

    const filteredBooks = books.filter((book) => newList.includes(book.bookId));
    setReadBooks(filteredBooks);
  }, [books]);

  useEffect(() => {
    const storeBooks = getStoredBook("wishList");
    const newList = storeBooks.map((id) => parseInt(id));

    const filteredBooks = books.filter((book) => newList.includes(book.bookId));
    setWishBooks(filteredBooks);
  }, [books]);

  // 🆕 Initialize sorted lists when readBooks/wishBooks change
  useEffect(() => {
    setSortRead([...readBooks]);
  }, [readBooks]);

  useEffect(() => {
    setSortWish([...wishBooks]);
  }, [wishBooks]);

  const handlePage = () => {
    const sortedRead = [...readBooks].sort(
      (a, b) => a.totalPages - b.totalPages
    );
    const sortedWish = [...wishBooks].sort(
      (a, b) => a.totalPages - b.totalPages
    );
    setSortRead(sortedRead);
    setSortWish(sortedWish);
    setSortType("Page");
  };

  const handleRating = () => {
    const sortedRead = [...readBooks].sort((a, b) => a.rating - b.rating);
    const sortedWish = [...wishBooks].sort((a, b) => a.rating - b.rating);
    setSortRead(sortedRead);
    setSortWish(sortedWish);
    setSortType("Rating");
  };
  return (
    <div>
      <div className="content-text text-xl text-center bg-gray-200 my-10 py-15 font-bold rounded-xl mx-2 md:mx-0">
        <p>Book</p>
      </div>

      <div className="text-center mb-5">
        <div className="dropdown ">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-[#23BE0A] text-white"
          >
            Sort By : {sortType}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => handlePage()}>
              <a>Page</a>
            </li>
            <li onClick={() => handleRating()}>
              <a>Rating</a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <ReadList sortRead={sortRead}></ReadList>
          </TabPanel>
          <TabPanel>
            <WishList sortWish={sortWish}></WishList>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBooks;
