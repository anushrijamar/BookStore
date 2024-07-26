import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home/Home";
import courses from "./courses/courses";
import Courses from "./components/Courses";
const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<courses />} />
      </Routes>
  );
};

export default App;
