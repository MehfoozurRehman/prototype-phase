import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Edit from "./screens/Edit";
import Header from "./components/Header";
import "./App.scss";
import Details from "./screens/Details";
import AddTeacher from "./screens/AddTeacher";
import AddTimeTable from "./screens/AddTimeTable";
import EditTeacher from "./screens/EditTeacher";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/add-teacher" element={<AddTeacher />} />
        <Route path="/edit-teacher" element={<EditTeacher />} />
        <Route path="/add-timetable" element={<AddTimeTable />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </>
  );
}
