import { Link } from "react-router-dom";
import React from 'react';
import { BsJustify } from "react-icons/bs";

function Sidebar() {
  return (
    <div className="sidebar" style={{ width: "200px", padding: "20px", background: "white", color: "black" }}>
      <img className="h-30 w-auto mb-4"
        src="https://www.bing.com/th/id/OIP.wyeSLsriT1soj-3lUhkKTQHaEK?w=370&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2" 
        alt="Logo" 
        style={{ width: "150px", marginBottom: "20px" }} 
      />
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li className="flex-col gap-3 ml-7 mt-4"><Link to="/" style={{ color: "black", textDecoration: "none" }}>E-Commerce</Link></li>
          <li className="flex-col gap-3 ml-7 mt-4"><Link to="/signup" style={{ color: "black", textDecoration: "none" }}>Sign Up</Link></li>
          <li className="flex-col gap-3 ml-7 mt-4"><Link to="/signin" style={{ color: "black", textDecoration: "none" }}>Sign In</Link></li>
          
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
