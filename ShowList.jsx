import React, { useEffect, useState } from "react";

function ShowList(props) {
  const [x, setX] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {}, []);

  useEffect(() => {
    let data = localStorage.getItem("products");
    data = JSON.parse(data);

    if (props.brand) {
      setProducts(data.filter((item) => item.brand === props.brand));
    } else setProducts(data);
  }, []);

  return (
    <section className="fyc">
      <div className="b1" style={{ padding: "1rem" }}>
        <h3>List of Products : {props.brand}</h3>
        <div className="bg1">
          <span style={{ width: "3rem" }}>ID</span>
          {!props.brand && <span style={{ width: "7rem" }}>Brand</span>}
          <span style={{ width: "7rem" }}>Price(Rs.)</span>
        </div>
        {products.map((item) => (
          <div key={item.id}>
            <span style={{ width: "3rem" }}>{item.id}</span>
            {!props.brand && (
              <span style={{ width: "7rem" }}>{item.brand}</span>
            )}
            <span style={{ width: "7rem" }}>{item.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
export default ShowList;
