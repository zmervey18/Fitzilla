import React from "react";
import { useEffect, useState } from "react";

const Workout = () => {
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    fetch("/Long%20%281%20hour%2030%20mins%29/Biceps/Shoulders")
      .then((response) => response.json())
      .then((data) => setInitialData(data));
  }, []);
  return (
    <main>
      <h1>{initialData}</h1>
    </main>
  );
};

export default Workout;
