import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import CreateUser from "./Pages/CreateUser";
import UpdateUser from "./Pages/UpdateUser";
import ShowUsers from "./Pages/ShowUsers";
import Navbar from "./components/Navbar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/users" element={<ShowUsers />} />
          <Route path="/users/create" element={<CreateUser />} />
          <Route path="/users/update/:id" element={<UpdateUser />} />
          <Route path="*" element={<h1> Error </h1>} />
        </Routes>
      </>
    </BrowserRouter>
  </React.StrictMode>
);
