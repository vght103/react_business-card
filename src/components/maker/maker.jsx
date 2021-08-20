import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "../header/header";
// import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const history = useHistory();

  const onLogout = () => {
    authService.logout();
    console.log("유저 없어짐");
  };

  useEffect(() => {
    // 로그아웃이 되서 유저가 없으면 로그인 페이지로 이동
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  return (
    <section>
      <h2>maker</h2>
      <Header onLogout={onLogout} />
    </section>
  );
};

export default Maker;
