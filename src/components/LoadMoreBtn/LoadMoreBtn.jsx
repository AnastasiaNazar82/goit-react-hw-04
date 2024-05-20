import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn(loadMoreImg) {
  return (
    <div className={css.containerBtn}>
      <button className={css.btn} type="button" onClick={loadMoreImg}>
        Load More
      </button>
    </div>
  );
}
