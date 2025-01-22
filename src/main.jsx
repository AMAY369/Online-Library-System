import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";

import App from "./App.jsx";
import "./index.css";
import HomePage from "./pages/HomePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import AddBookPage from "./pages/AddBookPage.jsx";
import BrowseBooksPage from "./pages/BrowseBooksPage.jsx";
import BookDetailsPage from "./pages/BookDeatilsPage.jsx";

const routers = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/browse-books",
        element: <BrowseBooksPage />,
        children: [
          {
            path: "/browse-books/:category",
            element: <BrowseBooksPage />,
          },
        ],
      },
      {
        path: "/add-book",
        element: <AddBookPage />,
      },
      {
        path: "/book-details/:id",
        element: <BookDetailsPage />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
];

const appRouter = createBrowserRouter(routers);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>
);