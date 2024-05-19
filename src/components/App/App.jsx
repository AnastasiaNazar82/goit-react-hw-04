// import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";
import toast from "react-hot-toast";
import { getArticles } from "../../articles-api";
import Loader from "../Loader/Loader";
import ErrorMessag from "../ErrorMessage/ErrorMessage";

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalImages, setTotalImages] = useState(0);
  const [imageUrl, setImageUrl] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query === "") return;

    async function asyncWrapper() {
      setError(null);
      setIsLoading(true);
      try {
        // setIsLoading(true);

        const result = await getArticles(query, page);
        setImages((prevState) => [...prevState, ...result]);
        setTotalImages(result.total_results);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    asyncWrapper();
  }, [query, page]);

  const getQuery = (query) => {
    // console.log(query);
    setQuery(query);
    setImages([]);
    setPage(1);
    setTotalImages(0);
  };

  const onHandleLoadMore = () => {
    setPage(page + 1);
  };

  // ======  Modal ============
  const handlImgClick = (image) => {
    setImageUrl(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <SearchBar onSubmit={getQuery} />
      {images.length > 0 && (
        <ImageGallery images={images} onImgClick={handlImgClick} />
      )}
      {images.length < totalImages && !isLoading && (
        <LoadMoreBtn onClick={onHandleLoadMore} />
      )}
      {isModalOpen && imageUrl && (
        <ImageModal
          isOpen={isModalOpen}
          imageUrl={imageUrl}
          onClose={closeModal}
        />
      )}
      {isLoading && <Loader />}
      {error && <ErrorMessag message={error} />}
      <Toaster />
    </div>
  );
}
