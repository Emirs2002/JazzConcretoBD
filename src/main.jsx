import React from "react";
import ReactDOM from "react-dom/client";
import { Layout } from "./components/Layout/Layout";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PrivateRoute } from "./Components/PrivateRoute/PrivateRoute";
import "./index.css";
import { LoginPage } from "./pages/LoginPage/LoginPage"
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { HomePage } from "./pages/HomePage/HomePage"
import { MemberPage } from "./pages/MemberPage/MemberPage"
import { LOGIN_URL, REGISTER_URL, HOME_PAGE } from "./constants/url";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={LOGIN_URL} element={<LoginPage />}></Route>
          <Route path={REGISTER_URL} element={<RegisterPage />}></Route>
          <Route path={HOME_PAGE} element={<HomePage />}></Route>
          <Route
            path="/integrantes/:integranteId"
            element={
              <PrivateRoute>
                <MemberPage />
              </PrivateRoute>
            }
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
