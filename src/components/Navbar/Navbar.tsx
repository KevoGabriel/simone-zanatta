import React from "react";
import logo from "../../images/logo-design.png";

export function Navbar() {
  return (
    <header className="bg-slate-100 ">
      <nav className="">
        <div>
          <img className="w-16" src={logo} alt="Logo" />
        </div>
      </nav>
    </header>
  );
}
