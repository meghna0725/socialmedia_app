import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "../pages/SignInPage";
import Dashboard from "../pages/Dashboard";
import ProfilePage from "../pages/ProfilePage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignInPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/messages" element={<div>Messages</div>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;