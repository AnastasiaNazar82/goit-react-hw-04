import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ images, onImgClick }) {
  return (
    <ul className={css.list}>
      {images.map((image) => (
        <li className={css.listItem} key={image.id}>
          <ImageCard
            photo={image.urls.small}
            alt={image.description || "Image description not available"}
            onClick={() => onImgClick(image)}
          />
        </li>
      ))}
    </ul>
  );
}
