import React, { useState } from "react";
import styles from "./App.module.css";
import { Response } from "./response";

const App = () => {
  const [greeting, setGreeting] = useState("");

  return (
    <>
      <div className={styles.title}>Click on a greeting to get a proper response to it</div>
      <div className={styles.btnContainer}>
        <span className={styles.btnWrapper}>
          <button onClick={() => setGreeting("hello")} className={styles.greetBtn}>
            Hello
          </button>
          <button onClick={() => setGreeting("goodbye")} className={styles.greetBtn}>
            Goodbye
          </button>
          <button onClick={() => setGreeting("salutations")} className={styles.greetBtn}>
            Salutations
          </button>
        </span>
      </div>
      <div className={styles.title}>Response to the greeting:</div>
      <Response greeting={greeting}/>
    </>
  );
};

export default App;
