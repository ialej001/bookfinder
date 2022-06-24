import React from "react";
import { Book } from "../../models/book";
import "./BookCard.css";

export const BookCard = (book: Book) => {
  const authors = book.authors ? book.authors.join(", ") : "";
  return (
    <div className="card">
      <img src={book.imgUrl.smallThumbnail} alt="Book cover" />
      <div className="cardBody">
        <h4>
          <b>{book.title}</b>
        </h4>
        <p>By: {authors}</p>
        <p>Publisher: {book.publisher}</p>
        <button>More Information</button>
      </div>
    </div>
  );
};
