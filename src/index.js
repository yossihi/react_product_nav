import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Products from "./Products";
import MyContext from "./MyContext";

const MyRoute = () => {
  const [Username, setUsername] = useState("");
  return (
    <React.StrictMode>
      <BrowserRouter>
        <MyContext.Provider value={{ Username, setUsername }}>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="/Login" element={<Login />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/Products" element={<Products />} />
            </Route>
          </Routes>
        </MyContext.Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyRoute/>);
