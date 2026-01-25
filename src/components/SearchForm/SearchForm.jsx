import React from "react";
import "./SearchForm.css";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

function SearchForm({ onSearch }) {
  const { values, errors, touched, handleChange } = useFormWithValidation({
    keyword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!values.keyword) {
      handleChange({
        target: {
          name: "keyword",
          value: values.keyword || "",
          type: "text",
          checked: false,
        },
      });
      return;
    }

    if (typeof onSearch === "function") {
      onSearch(values.keyword);
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="keyword"
        placeholder="Enter topic"
        className="search-form__input"
        value={values.keyword || ""}
        onChange={handleChange}
      />
      <button type="submit" className="search-form__button">
        Search
      </button>
      {touched.keyword && errors.keyword && (
        <span className="search-form__error">{errors.keyword}</span>
      )}
    </form>
  );
}

export default SearchForm;
