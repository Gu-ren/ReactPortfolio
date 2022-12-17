import React, { useState, useEffect } from "react";
import "./Quote.css";
const Quote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];

        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      });
  };

  const handleClick = () => {
    getQuote();
  };
  return (
    <>
      <div class="quote-wrapper">
        <div class="quote-heading">
          <p>Quotes that I found really inspiring</p>
        </div>

        <div class="icon-quote">
          <div className="text">
            <p>" {quote} "</p>
          </div>
          <div className="author">
            <p>- {author}</p>
          </div>
        </div>

        <div class="quote-buttons">
          <div class="btn">
            {/* <button onClick={handleClick} id="new-quote">
              {" "}
              Hover me
            </button>{" "} */}
            <button className="mqbtn">
              <span class="button_top" onClick={handleClick} id="new-quote">
                {" "}
                More Quotes
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quote;
