import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./Layout/Layout";
import Routes from "./Routes/index";

function App() {
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
