import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import FavouritesPage from "./pages/FavouritesPage.jsx";
import FavouriteDetailPage from "./pages/FavouriteDetailPage.jsx"; 
import NotFoundPage from "./pages/์NotFoundPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/fav" element={<FavouritesPage />} />
        <Route path="/fav/:id" element={<FavouriteDetailPage />} /> 
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
