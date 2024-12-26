import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components from react-router-dom
import Signup from "./components/signup/signup";
import Login from "./components/login/login";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/dashboard/dashboard.jsx';
import Main from "./components/dashboard/main/main";
import Monitor from "./components/dashboard/main/monitor/monitor";

function App() {

    return (
    <Router>
        <Routes>
        <Route index element={<Signup/>} />
            <Route path="/monitor" element={<Monitor/>}/>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/users" element={<Main/>}/>
        </Routes>
    </Router>
  );
}

export default App;
