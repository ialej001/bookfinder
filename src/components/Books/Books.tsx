import React, { useState } from "react";
import { searchApi } from "../../api/api";
import { Book } from "../../models/book";
import { BookResults } from "../BookResults/BookResults";
import { Search } from "../Search/Search";

// logical & stateful component for all book related content
const Books = () => {
  const [searchTerms, setSearchTerms] = useState<string>("");
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState<string>("");

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchTerms(e.target.value);
  };

  const handleBookLookup = (e: React.FormEvent) => {
    e.preventDefault();
    searchApi({ searchTerms, setBooks, setError });
  };

  return (
    <div>
      <Search
        handleSearchInputChange={handleSearchInput}
        handleBookLookup={handleBookLookup}
        error={error}
      />
      <BookResults books={books} />
    </div>
  );
};

export default Books;
