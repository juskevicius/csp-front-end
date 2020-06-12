import React, { useState, useEffect } from "react";
import styles from './response.module.css';
import axios from "axios";

const Response = ({ greeting }) => {
  const [response, setResponse] = useState("");

  const responseServiceUrl =
    "http://test-express-app-project-1.apps.ca-central-1.starter.openshift-online.com/";

  useEffect(() => {
    axios
      .get(`${responseServiceUrl}${greeting}`)
      .then((res) => {
        if (res.data) {
          setResponse(res.data);
        } else {
          setResponse("Response not found");
        }
      })
      .catch(() => {
        setResponse("Response not found");
      });
  }, [greeting]);

  return <div className={styles.response}>{response}</div>;
};

export { Response };
