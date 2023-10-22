import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SinglePage from "./pages/SinglePage";
import Header from "./components/Header";
import Favorite from "./pages/Favorite";

function App() {
  return (
    <div style={{ marginInline: 30, marginBlock: 20 }}>
      <div style={{ marginBottom: 20 }}>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singlePage/:id" element={<SinglePage />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </div>
  );
}

export default App;
