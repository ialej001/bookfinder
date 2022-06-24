import React from "react";
import { Book } from "../models/book";

interface Props {
  searchTerms: string;
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

export const searchApi = async ({ searchTerms, setBooks, setError }: Props) => {
  if (searchTerms === "") {
    setError("Search field must not be empty");
    setBooks([]);
    return;
  }

  const string = parameterizeSearch(searchTerms);
  let results: Book[] = [];
  const apiKey = process.env.REACT_APP_GOOGLEBOOKS_API_KEY;
  const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${string}&key=${apiKey}`;

  await fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      if (!data.items) {
        setError("Your search returned zero results.");
        setBooks([]);
        return;
      }

      data.items.forEach((item: any) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;

        if (thumbnail !== undefined) {
          results.push({
            authors: item.volumeInfo.authors,
            title: item.volumeInfo.title,
            publisher: item.volumeInfo.publisher ?? "No publisher listed",
            imgUrl: item.volumeInfo.imageLinks
          });
        } else {
          results.push({
            authors: item.volumeInfo.authors,
            title: item.volumeInfo.title,
            publisher: item.volumeInfo.publisher ?? "No publisher listed",
            imgUrl: { smallThumbnail: "", thumbnail: "" }
          });
        }
        setBooks(results);
        setError("");
      });
    })

    .catch(() => setError("An error occurred processing your request."));
};

function parameterizeSearch(string: string) {
  return string.split(" ").join("+");
}
