import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { categories } from "../utils/category";

const BrowseBooksPage = () => {

  const books = useSelector((state) => state.books.list.slice().reverse());
  const categoryFromParams = useParams().category;
  const [booksByCategory, setBooksByCategory] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (categoryFromParams && categoryFromParams !== "All") {
      const filtered = books.filter(
        (book) =>
          book.category.toLowerCase() === categoryFromParams.toLowerCase()
      );
      setBooksByCategory(filtered);
    } else {
      setBooksByCategory(books);
    }
  }, [categoryFromParams]);


  const filteredBooks = booksByCategory.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-2">
      <section className="flex flex-col items-center justify-between md:flex-row my-6 ">
        <ul className="w-full flex space-x-6 flex-wrap mb-6 md:my-8 md:w-full">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/browse-books/${category}`}
              className={`text-blue-400 text-lg
               hover:text-blue-800 hover:underline ${
                 category === categoryFromParams
                   ? "text-blue-900 underline"
                   : ""
               }`}
            >
              {category}
            </Link>
          ))}
        </ul>
        <section className="w-full flex items-center space-x-8 md:h-2/4">
          <div className="outline-none px-4 py-2 text-lg ml-auto block w-full md:w-4/5">
            <span className="text-gray-400 mr-4">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input
              type="text"
              placeholder="Search Books By Title & Author.."
              className="outline-none w-4/5 border border-gray-300 p-2"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
            className="ml-2">Search</button>
          </div>
        </section>
      </section>
      {filteredBooks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white shadow-md rounded overflow-hidden transform hover:scale-105 transition-transform"
            >
              <img
                src={book.cover}
                alt={book.title}
                className="h-48 w-full object-cover "
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {book.title}
                </h3>
                <p className="text-gray-600">{book.author}</p>
                <p className="text-gray-500 text-sm">{book.category}</p>
                <Link
                  to={`/book-details/${book.id}`}
                  className="mt-4 block w-fit bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-red-500 text-lg mt-10">
          Search for book `${search}` not found...!!
        </p>
      )}
    </div>
  );
};

export default BrowseBooksPage;