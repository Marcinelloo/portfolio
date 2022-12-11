import React from "react";
import { Route, Routes } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";

function App() {
  return <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Portfolio />} />
    </Route>
    <Route path="*" element={<NoPage />} />
  </Routes>;
}

export default App;
