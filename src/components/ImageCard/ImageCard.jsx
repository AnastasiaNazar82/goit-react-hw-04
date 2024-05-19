import css from "./ImageCard.module.css";

export default function ImageCard({ small, description, onClick }) {
  return (
    <div className={css.imgContainer}>
      <img
        className={css.listImage}
        src={small}
        alt={description}
        onClick={onClick}
      />
    </div>
  );
}
