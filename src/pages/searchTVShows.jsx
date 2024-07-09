import SearchTV from "../components/fragments/SearchTV";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import { useEffect } from "react";

const SearchTVShowsPage = () => {
  useEffect(() => {
    document.title = "AndraCinema - TV Shows";
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-[#fff]">
        <div className="mt-10 mb-20 mx-[5%]">
            <SearchTV />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchTVShowsPage;
