import React from "react";
import { Book } from "../../models/book";
import { BookCard } from "../BookCard/BookCard";
import "./BookResults.css";

interface Props {
  books: Book[];
  isLoading: boolean;
}

export const BookResults = ({ books, isLoading }: Props) => {
  return (
    <>
      {isLoading && <div className="lds-dual-ring"></div>}
      <div className="booksContainer">
        {books.length > 0 &&
          books.map((result, index) => {
            return (
              <BookCard
                key={index}
                title={result.title}
                authors={result.authors}
                publisher={result.publisher}
                imgUrl={result.imgUrl}
              />
            );
          })}
      </div>
    </>
  );
};
