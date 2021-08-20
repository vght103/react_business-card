// 로그인 호출하는 곳
import firebase from "firebase";
import firebaseApp from "./firebase";

class AuthService {
  // 로그인 완료 함수
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();

    console.log(authProvider);
    return firebaseApp.auth().signInWithPopup(authProvider);
  }

  // 로그아웃
  logout() {
    firebase.auth().signOut();
  }

  // 유저 변경 및 처음 로그인 유지
  // 유저의 유무에 따른 콜백함수를 실행
  onAuthChange(onUserChanged) {
    firebase.auth().onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }
}

export default AuthService;
