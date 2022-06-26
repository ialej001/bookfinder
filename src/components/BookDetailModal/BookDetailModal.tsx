import { Book } from "../../models/book";
import "./BookDetailModal.css";

interface Props {
  onClose: () => void;
  showModal: boolean;
  book: Book | undefined;
}

export default function BookDetailModal({ onClose, showModal, book }: Props) {
  if (!showModal) return <></>;

  const authorsFormatted = book?.authors ? book?.authors.join(", ") : "";

  return (
    <>
      <div
        className="darkBG"
        id="bookDetailModal"
        onClick={() => onClose}
      ></div>
      <div className="modal centered">
        <div className="modal-header">
          <h2 className="heading">
            <strong>{book?.title}</strong>
            <br />
            {book?.subtitle}
          </h2>
        </div>
        <div className="modalContent">
          Written by: {authorsFormatted}
          <br />
          {book?.publisher && <>Published by: {book?.publisher}</>}
          <br />
          {book?.publishedDate && <>Published on: {book?.publishedDate}</>}
          <br /> <br />
          {book?.averageRating && <>Average rating: {book?.averageRating}/5</>}
          <br />
          {book?.pageCount && <>Page count: {book?.pageCount} pages</>}
          <br />
          <br />
          {book?.isbn && (
            <>
              {book?.isbn.map((isbn, index) => {
                return (
                  <div key={index}>
                    {isbn.type}: {isbn.identifier} <br />
                  </div>
                );
              })}
            </>
          )}
        </div>
        <div className="actions">
          <button className="closeBtn" onClick={() => onClose()}>
            X
          </button>
        </div>
      </div>
    </>
  );
}
