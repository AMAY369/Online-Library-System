import React from "react";
import BookCategories from "../components/BookCategories";
import PopularBooks from "../components/PopularBooks";

const HomePage = () => {
  return (
    <div className="h-2/3 w-full ">
      <section className="text-center my-8 w-full">
        <h2 className="text-4xl font-semibold ">Welcome to Library</h2>
        <p className="text-gray-600 mt-2">
          Learn and Grow
        </p>
      </section>
      <BookCategories/>
      <PopularBooks/>
    </div>
  );
};

export default HomePage;