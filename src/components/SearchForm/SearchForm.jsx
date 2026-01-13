import React from "react";
import "./SearchForm.css";

function SearchForm() {
  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Enter topic"
        className="search-form__input"
      />
      <button type="submit" className="search-form__button">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
