import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components";
import './assets/styles/index.scss';
import { Cart, Catalog } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Catalog />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<Catalog />} />
      </Route>
    </Routes>
  );
}

export default App;
