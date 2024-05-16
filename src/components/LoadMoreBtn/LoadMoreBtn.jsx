import css from "./LoadMoreBtn.module.css";

export default function LoadMore(loadMoreImg) {
  return (
    <div className={css.containerBtn}>
      <button className={css.btn} onClick={loadMoreImg}>
        Load More
      </button>
    </div>
  );
}
