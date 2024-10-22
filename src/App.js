// App.js
import React from "react";
import Dashboard from "./components/Dashboard";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/PDFtoWord">
      <div className="App">
        <Dashboard />
      </div>
    </BrowserRouter>
  );
}

export default App;
