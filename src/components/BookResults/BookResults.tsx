import React from "react";
import { Book } from "../../models/book";
import { BookCard } from "../BookCard/BookCard";

interface Props {
  books: Book[];
  error: string;
}

export const BookResults = ({ books, error }: Props) => {
  return (
    <>
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
      <div></div>
    </>
  );
};