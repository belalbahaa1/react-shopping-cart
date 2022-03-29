import React from "react";
import "../../css/Header/Header.css";
import { words } from "../../words";

const Header = () => {
  return (
    <header>
      <h1>{words.headerTitle}</h1>
    </header>
  );
};

export default Header;
