import React, { useState } from "react";
import { searchApi } from "../../api/api";
import { Book } from "../../models/book";
import BookDetailModal from "../BookDetailModal/BookDetailModal";
import { BookResults } from "../BookResults/BookResults";
import { Search } from "../Search/Search";

// logical & stateful component for all book related content
const Books = () => {
  const [searchTerms, setSearchTerms] = useState<string>("");
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalBook, setModalBook] = useState<Book>();

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchTerms(e.target.value);
  };

  const handleBookLookup = (e: React.FormEvent) => {
    e.preventDefault();
    searchApi({ searchTerms, setBooks, setError, setIsLoading });
  };

  const handleModalToggle = () => {
    setShowModal(showModal => !showModal);
  };

  const handleModalContent = (index: number) => {
    setModalBook(books[index]);
  };

  return (
    <div>
      <Search
        handleSearchInputChange={handleSearchInput}
        handleBookLookup={handleBookLookup}
        error={error}
      />
      <BookDetailModal onClose={handleModalToggle} showModal={showModal} book={modalBook}/>
      <BookResults
        books={books}
        isLoading={isLoading}
        showModal={handleModalToggle}
        setModalContent={handleModalContent}
      />
    </div>
  );
};

export default Books;
