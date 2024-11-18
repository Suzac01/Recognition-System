import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components from react-router-dom
import Signup from "./components/signup/signup";
import Login from "./components/login/login";
import 'bootstrap/dist/css/bootstrap.min.css';
import Backgroundtext from "./components/navbar/backgroundtext/backgroundtext";
import Sidebar from './components/common/sidebar/sidebar.jsx';
import Dashboard from './components/dashboard/dashboard.jsx';
import Users from './components/users/users.jsx';

function App() {
  return (
    <Router>
        <Routes>
        <Route index element={<Signup/>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/users" element={<Users/>}/>
        </Routes>
        {/*<Dashboard/>*/}
        <Routes>
      </Routes>
    </Router>
  );
}

export default App;
