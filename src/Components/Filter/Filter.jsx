// DropdownMenu.jsx

import React, { useState } from "react";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        onClick={toggleDropdown}
        type="button"
      >
        ☰ Menu
      </button>

      <div className={`dropdown-menu ${isOpen ? "show" : ""}`}>
        <a className="dropdown-item" href="#">
          Item 1
        </a>
        <a className="dropdown-item" href="#">
          Item 2
        </a>
        <a className="dropdown-item" href="#">
          Item 3
        </a>
      </div>
    </div>
  );
};

export default DropdownMenu;
