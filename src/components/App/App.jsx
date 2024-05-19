// import { useEffect } from "react";
// import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div>
      <SearchBar />
      <LoadMoreBtn />
      <ImageModal />
      <Toaster />
    </div>
  );
}
