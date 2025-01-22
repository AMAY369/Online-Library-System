import React from "react";
import { Link, useParams } from "react-router-dom";

import { useSelector } from "react-redux";

const BookDetailsPage = () => {
  const books = useSelector((state) => state.books.list);

  const { id } = useParams();
  const book = books.find((book) => book.id == id);

  const { cover, title, author, description, rating, category } = book;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <img
        src={cover}
        alt={title}
        className="w-full h-64 object-cover rounded-md"
      />
      <h2 className="text-2xl font-bold mt-4">{title}</h2>
      <p className="text-gray-700 text-lg mt-2">Author: {author}</p>
      <p className="text-gray-600 text-md mt-2">Category: {category}</p>
      <p className="text-gray-800 text-md mt-4">{description}</p>
      <p className="text-yellow-500 text-lg mt-4">Rating: {rating} / 5</p>

      <div className="mt-6 flex justify-between">
        <Link
          to="/browse-books"
          className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Back to Browse
        </Link>
        <Link
          to="/home"
          className="inline-block bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default BookDetailsPage;