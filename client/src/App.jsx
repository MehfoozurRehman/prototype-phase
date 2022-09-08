import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Add from "./screens/Add";
import Edit from "./screens/Edit";
import Header from "./components/Header";
import "./App.scss";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </>
  );
}
