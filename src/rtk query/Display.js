import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./Register.js";
import Login from "./Login.js";
import Users from "./Users.js";
import Home from "./Home.js";

function Display()
{
    
    return (
            <Routes>
                <Route path="/" index element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/users" element={<Users />} />
            </Routes>
    );
}

export default Display;