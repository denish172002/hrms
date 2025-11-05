import React, { useEffect, useState } from "react";
import axios from "axios";

const TestApi = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("/api/test")
      .then(res => setMessage(res.data.message))
      .catch(err => console.error(err));
  }, []);

  return <h2>Backend says: {message}</h2>;
};

export default TestApi;