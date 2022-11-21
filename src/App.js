import React from "react";
import "./App.css";

import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lviv" />
        <footer>
          <div>
            This project was coded by Anastasiia Kmit and is{" "}
            <a href="/">open-sourced on Github</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
