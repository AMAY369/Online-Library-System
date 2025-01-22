import { Link } from "react-router-dom";
import { categories } from "../utils/category";

const BookCategories = () => {

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center">Book Categories</h2>
      <section className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 mt-4">
        {categories.map(
          (category) =>
            category !== "All" && (
              <Link
                key={category}
                to={`/browse-books/${category}`}
                className="bg-gray-100 p-4 rounded shadow hover:bg-gray-200 transition-colors flex item-center justify-center text-blue-800 font-extrabold"
              >
                <h3 className="text-xl font-bold">{category}</h3>
              </Link>
            )
        )}
      </section>
    </div>
  );
};


export default BookCategories;