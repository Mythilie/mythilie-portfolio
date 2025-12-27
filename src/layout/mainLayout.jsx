import React from "react";
import Header from "../components/header";
import Body from "../components/body";
import "./layout.css";
import Footer from "../components/footer";

export default function MainLayout() {
  return (
    <div className="layout">
      <div className="headContainer">
        <Header />
      </div>
      <div className="content">
        <Body />
        <Footer />
      </div>
    </div>
  );
}
