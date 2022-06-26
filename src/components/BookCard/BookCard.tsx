import "./BookCard.css";

interface Props {
  title: string;
  authors: string[];
  publisher: string;
  imgUrl: string;
  index: number;
  showModal: () => void;
  setModalContent: (index: number) => void;
}
export const BookCard = ({
  title,
  authors,
  publisher,
  imgUrl,
  index,
  showModal,
  setModalContent
}: Props) => {
  const authorsFormatted = authors ? authors.join(", ") : "";

  const handleModalContent = (index: number) => {
    showModal();
    setModalContent(index);
  };
  return (
    <div className="card">
      <img src={imgUrl} alt="Book cover" />
      <div className="cardBody">
        <h4>
          <b>{title}</b>
        </h4>
        <p>By: {authorsFormatted}</p>
        <p>Publisher: {publisher}</p>
        <button onClick={() => handleModalContent(index)}>
          More Information
        </button>
      </div>
    </div>
  );
};
