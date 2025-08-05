import "./App.css";
import SearchBar from "./SearchBar";
import ImageGallery from "./ImageGallery";
import { ApiComponent } from "../axios";
import { useState, useRef } from "react";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import LoadMoreBtn from "./LoadMoreBtn";
import toast, { Toaster } from 'react-hot-toast';
import ImageModal from "./ImageModal";

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  const apiRef = useRef(new ApiComponent()).current;

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  function modalHandleClick(e) {
    console.log(e);
  }

  const loadPhotos = async (topic, isNewSearch = false) => {
    try {
      setLoading(true);
      setError(false);
      setLoadMore(false);

      if (isNewSearch) {
        apiRef.resetPage();
        setPhotos([]);
      } else {
        apiRef.nextPage();
      }

      const data = await apiRef.fetchPhotos(topic);
      const totalHits = data.total;
      const totalPages = Math.ceil(totalHits / apiRef.limit);

      setPhotos(prev => {
        if (isNewSearch) return data.results;

        const existingIds = new Set(prev.map(p => p.id));
        const newUnique = data.results.filter(p => !existingIds.has(p.id));
        return [...prev, ...newUnique];
      });

      setLoadMore(apiRef.page < totalPages);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };


  const onSubmit = async (e) => {
    e.preventDefault();
    const topic = e.target[0].value;
    if (!topic) {
      toast.error('Write anything!');
      return;
    }
    await loadPhotos(topic, true);
  };

  const handleLoadMore = async () => {
    const topic = document.querySelector("input").value;
    await loadPhotos(topic, false);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <div className="gallery-loader-container">
        <ImageGallery onClick={modalHandleClick} photos={photos} />
        {loading && <Loader />}
        {error && <ErrorMessage />}
        <Toaster position="top-left" />
      </div>
      {loadMore && <LoadMoreBtn onClick={handleLoadMore} />}
      {modalIsOpen && <ImageModal openModal={openModal} closeModal={closeModal} />}

    </>
  );
}

export default App;
