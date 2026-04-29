import React from "react";

import { BrowserRouter, Route, Routes } from "react-router";

import Landing from "./pages/Landing/Landing";
import Photo from "./pages/Photo/Photo";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/:id" element={<Photo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
