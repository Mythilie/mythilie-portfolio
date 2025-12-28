import React from "react";
import Header from "../components/header";
import { Outlet } from "react-router-dom";
import "./layout.css";

export default function MainLayout() {
  return (
    <div className="layout">
      <div className="headContainer">
        <Header />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
