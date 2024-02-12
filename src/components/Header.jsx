import React from "react";
import logo from "../assets/investment-calculator-logo.png";

export const Header = () => {
  return (
    <header id="header">
      <img src={logo} alt="logo image showing money bag" />
      <h1>INVESTMENT CALCULATOR</h1>
    </header>
  );
};
