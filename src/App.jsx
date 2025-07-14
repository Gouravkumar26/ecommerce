import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./assets/components/Sidebar";
import SignIn from "./assets/components/pages/SignIn";
import SignUp from "./assets/components/pages/SignUp";
import OrdersPage from "./assets/components/pages/OrdersPages";
import React from 'react'


function App() {
  return (
    <Router>
      <div className="app-container" style={{ display: "flex" }}>
        <Sidebar />
        <div className="main-content" style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<OrdersPage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
