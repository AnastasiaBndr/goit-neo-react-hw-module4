import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard";

export default function ImageGallery({ photos }) {
  return (
    <ul>
      {photos.map(photo => {
        return(<li key={photo.id}>
          <ImageCard src={photo.urls.small} alt={photo.description} />
        </li>)
      })}

    </ul>




  );
}
