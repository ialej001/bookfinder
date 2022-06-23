import React from "react";

interface Props {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchBook: (e: React.FormEvent) => void;
}

const Search = ({ handleSearch, searchBook }: Props) => {
  return (
    <div>
      <form onSubmit={(e) => searchBook(e)} action="">
        <input
          type="text"
          placeholder="Search by title"
          onChange={e => handleSearch(e)}
        />
        <button type="submit">
          <i className="fas fa-search"></i>Search
        </button>
      </form>
    </div>
  );
};

export default Search;
