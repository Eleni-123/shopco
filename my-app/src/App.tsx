import React from "react";
import SignUpBanner from "./components/SignUpBanner";
import "./App.css";
import CategoriesBar from "./components/CategoriesBar";

function App() {
  return (
    <>
      <SignUpBanner />
      {/* Το υπόλοιπο περιεχόμενο της εφαρμογής */}
      <CategoriesBar />
    </>
  );
}

export default App;
