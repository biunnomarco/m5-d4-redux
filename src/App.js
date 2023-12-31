import React from "react";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hompage from "./Pages/Hompage";
import ErrorPage from "./Pages/ErrorPage";
import Cart from "./Pages/Cart";
import BookDetails from "./Pages/BookDetails";


function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Hompage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter >

    </>
  );
}

export default App;
