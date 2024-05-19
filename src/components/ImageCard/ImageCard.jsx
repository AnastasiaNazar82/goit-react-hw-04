import css from "./ImageCard.module.css";

export default function ImageCard({ photo, alt, onClick }) {
  return (
    <div className={css.imgContainer}>
      <img className={css.listImage} src={photo} alt={alt} onClick={onClick} />
    </div>
  );
}
