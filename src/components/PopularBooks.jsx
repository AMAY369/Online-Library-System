import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const PopularBooks = () => {
  const books = useSelector((state) => state.books.list.slice().reverse());

  return (
    <section className="my-5 mb-8 bg-gradient-to-b from-white to-gray-400">
      <h2 className="text-2xl font-semibold text-center">Popular Books</h2>
      <div className=" p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {books.filter((book) => book.popular)
          .map((book) => (
            <div
              key={book.id}
              className="bg-white shadow-md shadow-gray-400 rounded-lg overflow-hidden flex flex-col items-center px-0 py-4"
            >
              <img
                src={book.cover}
                alt={book.title}
                className="w-fit h-48 object-contain "
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{book.title}</h3>
                <Link
                  to={`/book-details/${book.id}`}
                  className="text-white mt-4 block mx-auto hover:underline w-32 bg-blue-800 rounded-3xl p-2 "
                >
                  View More
                </Link>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default PopularBooks;