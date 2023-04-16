import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom"
import Index from "./Layout/Index";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    </div>
  );
}

export default App;
