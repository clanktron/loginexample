import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Mainpage from "./mainpage";
import Login from "./login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to='/login' />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Mainpage />} />
      </Routes>
    </BrowserRouter>
  );
}
