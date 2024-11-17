import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components from react-router-dom
import Signup from "./components/signup/signup";
import Login from "./components/login/login";
import 'bootstrap/dist/css/bootstrap.min.css';
import Backgroundtext from "./components/navbar/backgroundtext/backgroundtext";
import Sidebar from './components/common/sidebar/sidebar.jsx';
import Dashboard from './components/dashboard/dashboard.jsx';

function App() {
  return (
    <Router>

        <Dashboard/>
      <Routes>

        {/*<Route path="/signup" element={<Signup />} />*/}
        {/*<Route path="/login" element={<Login />} />*/}

      </Routes>
    </Router>
  );
}

export default App;
