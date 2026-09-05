import React, { useEffect, useState } from "react";

export function ShowList2() {
  const [num, setNum] = useState(0);
  const [str, setStr] = useState("");
  const [bool, setBool] = useState(false);
  const [arr, setArr] = useState([]);

  const [brand, setBrand] = useState("All");
  const [products, setProducts] = useState([]);

  useEffect(() => {}, []);

  useEffect(() => {
    const data = localStorage.getItem("products");
    if (data) {
      setProducts(JSON.parse(data));
    }
  }, []);

  // FILTER
  const filteredProducts =
    brand === "All"
      ? products
      : products.filter((product) => product.brand === brand);

  return (
    <section className="fyc">
      <div className="b1" style={{ padding: "1rem" }}>
        <h3>Product list </h3>

        {/* CONTROLLED COMPONENT */}

        <label>Select Brand: </label>

        <select value={brand} onChange={(e) => setBrand(e.target.value)}>
          <option value="All">All</option>
          <option value="Levis">Levis</option>
          <option value="Wrangler">Wrangler</option>
          <option value="Pepe">Pepe</option>
        </select>

        {/* MAP */}
        <div className="bg1" style={{ marginTop: "0.5rem" }}>
          <span>Item Code</span>
          {brand === "All" && <span>Brand</span>}
          <span>Price(Rs.)</span>
        </div>
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <span>{product.id}</span>
            {brand === "All" && <span>{product.brand}</span>}
            <span>{product.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
