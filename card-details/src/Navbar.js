import React from 'react';
const Navbar = () => {
  return (
    <nav className = "navbar">
      <h1>Clients Base Network</h1>
      <div className = "links">
        <a href = "/">Home</a>
        <a href = "/create">New Blog</a>
      </div>
    </nav>
  );
}

export default Navbar;
