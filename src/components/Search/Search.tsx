import React from "react";
import "./Search.css";
interface Props {
  handleSearchInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBookLookup: (e: React.FormEvent) => void;
  error: string;
}

export const Search = ({
  handleSearchInputChange,
  handleBookLookup,
  error
}: Props) => {
  return (
    <div className="searchArea">
      <form onSubmit={e => handleBookLookup(e)} action="">
        <input
          type="text"
          placeholder="Search by title"
          onChange={e => handleSearchInputChange(e)}
          name="searchInput"
        />
        <button type="submit">
          <i className="fas fa-search"></i>Search
        </button>
      </form>
      <div className="error">{error !== "" && <p>{error}</p>}</div>
    </div>
  );
};
