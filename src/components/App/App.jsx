import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

import { getImages } from "../../articles-api";

import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import ErrorMessag from "../ErrorMessage/ErrorMessage";

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(false);
  const [totalImages, setTotalImages] = useState(0);

  useEffect(() => {
    if (query === "") return;

    async function asyncWrapper() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await getImages(query, page);
        setImages((prevState) => [...prevState, ...data.results]);
        setTotalImages(data.total_results);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    asyncWrapper();
  }, [query, page]);

  const getQuery = (query) => {
    setQuery(query);
    setImages([]);
    setPage(1);
    setTotalImages(0);
  };

  const loadMoreImg = () => {
    setPage(page + 1);
  };

  // ======  Modal ============

  function openModal(alt, url) {
    setIsOpen(true);
    setImageUrl({ alt, url });
  }
  function closeModal() {
    setIsOpen(false);
    setImageUrl({ alt: "", url: "" });
  }

  return (
    <div>
      <SearchBar onSubmit={getQuery} />
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {images.length < totalImages && !isLoading && (
        <LoadMoreBtn onClick={loadMoreImg} />
      )}
      {isOpen && imageUrl && (
        <ImageModal isOpen={isOpen} imageUrl={imageUrl} onClose={closeModal} />
      )}
      {isLoading && <Loader isLoading={isLoading} />}
      {error && <ErrorMessag message={error} />}
      <Toaster />
    </div>
  );
}
