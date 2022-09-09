import React from "react";
import { Route, Routes } from "react-router-dom";
import EditTimeTable from "./screens/EditTimeTable";
import AddTimeTable from "./screens/AddTimeTable";
import EditTeacher from "./screens/EditTeacher";
import AddTeacher from "./screens/AddTeacher";
import Header from "./components/Header";
import Details from "./screens/Details";
import Home from "./screens/Home";
import "./App.scss";

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
        <Route path="/edit-timetable" element={<EditTimeTable />} />
      </Routes>
    </>
  );
}
