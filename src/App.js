import React, { useState } from "react";
import styles from "./App.module.css";
import { Response } from "./Response";

const App = () => {
  const [greeting, setGreeting] = useState("");

  const greetings = ["Hello", "Goodbye", "Salutations"];

  return (
    <>
      <div className={styles.title}>
        Click on a greeting to get a proper response to it
      </div>
      <div className={styles.btnContainer}>
        <span className={styles.btnWrapper}>
          {greetings.map((greet) => (
            <button
              key={greet}
              onClick={() => setGreeting(greet.toLowerCase())}
              className={styles.greetBtn}
            >
              {greet}
            </button>
          ))}
        </span>
      </div>
      <div className={styles.title}>Response to the greeting:</div>
      <Response greeting={greeting} />
    </>
  );
};

export default App;
