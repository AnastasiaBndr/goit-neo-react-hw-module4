import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard";

export default function ImageGallery({ photos,onClick }) {
  return (
    <ul className={css["gallery-container"]}>
      {photos.map(photo => {
        return(<li key={photo.id}>
          <ImageCard onClick={onClick}src={photo.urls.small} alt={photo.description} />
        </li>)
      })}

    </ul>




  );
}
