import React from "react";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
s

function App() {
  return (
    <>

      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
         
        </Routes>
      </main>
    </>
  );
}

export default App;

