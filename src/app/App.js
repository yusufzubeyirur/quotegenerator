import styles from "./App.module.css";
import { useState, useEffect } from "react";

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState({ text: "", author: "" });

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => setQuotes(data))
      .catch((error) => console.error("Error fetching quotes:", error));
  }, []);

  const getNewQuote = () => {
    if (quotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex]);
    }
  };

  useEffect(() => {
    getNewQuote();
  }, [quotes]);

  return (
    <div className={styles.container}>
      <div className={styles.headingcontainer}>
        <h1 className={styles.heading}>Project 3: Quote Generator</h1>
      </div>
      <div className={styles.quotecontainer}>
        <button onClick={getNewQuote}>New Quote</button>
        <div className={styles.quote}>
          <p>"{quote.text}"</p>
          <p className={styles.author}>- {quote.author || "Unknown"}</p>
        </div>
      </div>
    </div>
  );
}
