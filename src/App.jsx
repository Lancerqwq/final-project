import "./App.css";
import React, { useState, useEffect } from "react";
import { HTTPService } from "./api/HTTPService";

function App() {
  const text = {
    title: "foo",
    body: "bar",
    userId: 1,
  };
  const [books, setBooks] = useState([]);
  useEffect(() => {
    HTTPService.postRequest("todos", text);
    HTTPService.getRequest("todos/20").then((data) => setBooks(data));
  }, []);

  return <div className="App">{books.title}</div>;
}

export default App;
