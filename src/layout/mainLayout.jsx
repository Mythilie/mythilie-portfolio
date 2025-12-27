import React from "react";
import Header from "../components/header";
import Body from "../components/body";
import './layout.css'
import Footer from "../components/footer";

export default function MainLayout() {
    return (
        <div className="layout">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}