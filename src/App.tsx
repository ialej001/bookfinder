import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Books from "./components/Books/Books";

function App() {
  return (
    <div className="App">
      <Header />
      <Books />
      
      {/* <div className="booksContainer">
        {results.length > 0 &&
          results.map((result, index) => {
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
      </div> */}
    </div>
  );
}

export default App;
