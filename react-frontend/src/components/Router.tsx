import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "../pages/SignInPage";
import Dashboard from "../pages/Dashboard";
import ProfilePage from "../pages/ProfilePage";
import AnalyticsPage from "../pages/AnalyticsPage";
import MessagesPage from "../pages/MessagesPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignInPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/messages" element={<MessagesPage />} />
                <Route path="/analytics" element={<AnalyticsPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;