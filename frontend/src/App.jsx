import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home/Home";
import Signup from "./components/Signup";
import Course from "./course/Course";
const App = () => {
  return (
     <div className="dark:bg-slate-900 dark:text-white">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
     </div>
  );
};

export default App;
