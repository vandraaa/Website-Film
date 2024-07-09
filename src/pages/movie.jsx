import { useEffect, useState } from "react";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import SearchMovie from "../components/fragments/SearchMovie";

const MoviePage = () => {
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    document.title = "AndraCinema - Movies";
  });

  return (
    <>
      <Navbar />
      <div className="mt-10 mb-20 mx-[5%]">
        <SearchMovie />
      </div>
      <Footer />
    </>
  );
};

export default MoviePage;
