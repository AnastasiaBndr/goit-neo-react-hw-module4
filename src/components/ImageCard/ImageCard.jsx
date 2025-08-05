import css from "./ImageCard.module.css";

export default function ImageCard({src,alt,onClick}) {
  return (
    <div className={css["image-container"]} onClick={onClick}>
      <img src={src} alt={alt} />
    </div>
  );
}
