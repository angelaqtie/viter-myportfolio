import React from "react";

const Header = () => {
  return (
    <header className="bg-primary py-3">
      <div className="container flex justify-between items-center">
        <h3 className="font-monoton font-medium text-4xl text-light">KAC</h3>
        <div className="bg-light px-4 rounded-full">
          <ul className="flex items-center gap-5 text-dark font-semibold">
            <li>ABOUT</li>
            <li>SKILLS</li>
            <li>CONTACT</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
