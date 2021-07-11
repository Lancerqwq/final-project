import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HTTPService } from "./api/HTTPService";
import Layout from "./Layout/Layout";
import Routes from "./Components/Routes/index";

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

  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
