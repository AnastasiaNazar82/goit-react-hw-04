import { Field, Form, Formik } from "formik";
import { FiSearch } from "react-icons/fi";

export default function SearchBart({ onSubmit }) {
  return (
    <header>
      <Formik
        initialValues={{ query: "" }}
        handleSubmit={(values, actions) => {
          onSubmit(values.query);
          actions.resetForm();
        }}
      >
        <Form>
          <Field
            type="text"
            name="query"
            autoComplete="off"
            autoFocus={true}
            placeholder="Search images and photos"
          />
          {/* {isError && <p>Please enter a search term.</p>} */}
          <button type="submit">
            <FiSearch size="16px" />
          </button>
        </Form>
      </Formik>
    </header>
  );
}
