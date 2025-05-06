import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormList from "./components/FormList";
import FormBuilder from "./components/FormBuilder";
import FormView from "./components/FormView";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<FormList />} />
      <Route path="/create" element={<FormBuilder />} />
      <Route path="/form/:id" element={<FormView />} />
    </Routes>
  </Router>
);

export default App;
