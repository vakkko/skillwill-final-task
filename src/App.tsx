import React from "react";

import { BrowserRouter, Route, Routes } from "react-router";

import Landing from "./pages/Landing/Landing";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
