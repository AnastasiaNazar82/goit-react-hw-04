import css from "./ErrorMessage.module.css";

export default function ErrorMessag() {
  return (
    <div>
      <p className={css.error}>Sorry, try again later! </p>
    </div>
  );
}
