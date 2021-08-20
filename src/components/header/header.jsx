import React from "react";
import styles from "./header.module.css";

const Header = ({ onLogout }) => {
  return (
    <header className={styles.header}>
      <img
        src={process.env.PUBLIC_URL + "/images/logo.png"}
        alt="logo"
        className={styles.logo}
      />
      <h1>Business Card Maker</h1>

      {onLogout && (
        <button className={styles.logout} onClick={onLogout}>
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;
