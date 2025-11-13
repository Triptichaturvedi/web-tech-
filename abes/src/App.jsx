import react ,{useEffect, useState} from "react";
import Fashion from "./fashion";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <h1>Fashion Products</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {books.map((book) => (
          <Fashion
            key={book.id}
            image={book.image}
            title={book.title}
            price={book.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;