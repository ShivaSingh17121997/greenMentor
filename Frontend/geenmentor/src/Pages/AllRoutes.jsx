import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './Home'
import Signup from './Signup'
import Login from './Login'

export default function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </div>
    )
}
