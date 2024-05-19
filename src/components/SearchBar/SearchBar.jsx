// import { Field, Form, Formik, ErrorMessage } from "formik";
import { IoIosSearch } from "react-icons/io";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

export default function SearchBart({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.query.value.trim();

    if (!value) {
      return toast.error("This input can't be empty!");
    }
    onSubmit(value);
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          placeholder="Search images and photos"
          name="topic"
          autoFocus
        />
        <button className={css.button} type="submit">
          <IoIosSearch />
        </button>
      </form>
    </header>
  );
}
