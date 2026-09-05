import React from "react";
import { useEffect, useState } from "react";

export const HooksDemo = (props) => {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [darkMode, setDarkMode] = useState(props.darkMode);

  // going out of react environment
  useEffect(() => {}); // no dependency array
  useEffect(() => {}, []); // empty dependency array
  useEffect(() => {}, [count]); // dependency array with state variable

  useEffect(() => {
    document.title = `Title is ${count}`;
  });

  useEffect(() => {
    let data = localStorage.getItem("products");
    data = JSON.parse(data);
    setProducts(data);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "skyblue";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }, [darkMode]);

  return (
    <section className="box fy">
      <div style={{ textAlign: "end" }}>
        {/* <button className="btn1" onClick={theme}> */}
        <button className="btn1" onClick={() => setDarkMode(!darkMode)}>
          Dark/Light
        </button>
      </div>
      <hr />
      <div className="fyc box1 bg1">
        <button className="btn2" onClick={() => setCount(count + 1)}>
          Increment Counter
        </button>
        <p>
          Count is : <span className="sp1">{count}</span>{" "}
        </p>
      </div>
    </section>
  );
};
