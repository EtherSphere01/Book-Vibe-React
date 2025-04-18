import React from "react";
import ReadList from "../ReadList/ReadList";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import WishList from "../WishList/WishList";
import { useLoaderData } from "react-router";

const ListedBooks = () => {
  const books = useLoaderData();
  return (
    <div>
      <div className="content-text text-xl text-center bg-gray-200 my-10 py-15 font-bold rounded-xl mx-2 md:mx-0">
        <p>Book</p>
      </div>

      <div>
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <ReadList books={books}></ReadList>
          </TabPanel>
          <TabPanel>
            <WishList books={books} ></WishList>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBooks;
