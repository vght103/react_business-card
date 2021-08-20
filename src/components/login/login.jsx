import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const history = useHistory();

  const goToMaker = (userId) => {
    history.push({
      pathname: "/maker",
      state: { id: userId },
    });
  };

  const onLogin = (event) => {
    authService
      .login(event.currentTarget.innerText)
      .then((data) => goToMaker(data.user.uid));

    // ? 데이터가 나왔어. 뭘 해야할까?
    // maker 페이지로 가야겠지
    //  사용자의 정보도 같이 보내주기 위해 uid를 같이 보내주자
  };

  useEffect(() => {
    // 페이지가 처음에 렌더되면서 유저가 있는지 확인 후 페이지 이동
    authService.onAuthChange((user) => {
      user && goToMaker(user.uid);
    });
  });

  return (
    <div>
      <Header />
      <section className={styles.login}>
        <h2 className={styles.title}>로그인</h2>
        <button className={styles.button} onClick={onLogin}>
          Google
        </button>
        <button className={styles.button} onClick={onLogin}>
          Github
        </button>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
