import {} from "react-router-dom";
import styles from "./app.module.css";
import Header from "./components/header/header";

function App({}) {
  return (
    <>
      <div className={styles.app}>
        <Header />
      </div>
    </>
  );
}

export default App;
