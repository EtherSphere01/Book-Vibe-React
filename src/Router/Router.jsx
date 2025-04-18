import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import BookDetails from "../pages/BookDetails/BookDetails";
import ReadList from "../pages/ReadList/ReadList";
import ListedBooks from "../pages/ListedBooks/ListedBooks";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("../../public/data/booksData.json"),
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/bookDetails/:id",
        loader: () => fetch("../../public/data/booksData.json"),
        Component: BookDetails,
      },
      {
        path: "listedBooks",
        Component: ListedBooks,
      },
      {
        path: "/readList",
        Component: ReadList,
      },
    ],
  },
]);
