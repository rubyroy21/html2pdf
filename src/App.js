import React from "react";
import "./App.css";
import HtmlToPdfConverter from "./html2pdf/html2pdfConvert";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>HTML to PDF Converter</h1>
      </header>
      <main>
        <HtmlToPdfConverter />
      </main>
    </div>
  );
}

export default App;
