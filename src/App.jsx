import "./App.css";
import React, { useState, useEffect } from "react";
import { HTTPService } from "./api/HTTPService";

function App() {
  const [books, setBooks] = useState([]);
  const httpService = new HTTPService();
  useEffect(() => {
    httpService.getRequest("todos/2").then((data) => setBooks(data));
  }, []);
  // httpService
  //   .postRequest("todos", "hehehehe")
  //   .then((data) => console.log(data));
  console.log(books);
  return <div className="App" />;
}

export default App;
