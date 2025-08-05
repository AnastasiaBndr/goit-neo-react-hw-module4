import "./App.css";
import SearchBar from "./SearchBar";
import ImageGallery from "./ImageGallery";
import { ApiComponent } from "../axios";
import { useState } from "react";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import LoadMoreBtn from "./LoadMoreBtn";

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const apicomponent = new ApiComponent();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setPhotos([]);
      setError(false);
      setLoading(true);

      const data = await apicomponent.fetchPhotos(e.target[0].value);
      setPhotos(data);
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };


  const handleLoadMore = async () => {
    ApiComponent.page = ApiComponent.page + 1;

    try {
      setPhotos([]);
      setError(false);
      setLoading(true)
      const data = await apicomponent.fetchPhotos(e.target[0].value);
      setPhotos(...photos, ...data);
    } catch (err) {
      setError(true);
    } finally { setLoading(false); }


  }

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <div class="gallery-loader-container">
        <ImageGallery photos={photos} />
        {loading && <Loader />}
        {error && <ErrorMessage />}
      </div>
      <LoadMoreBtn />

    </>
  );
}

export default App;
