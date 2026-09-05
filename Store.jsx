import React, { useState } from "react";

function Store() {
  const [msg, setMsg] = useState("");
  // create store of jeans
  const products = [
    { id: 1, category: "Jeans", brand: "Levis", price: 2000 },
    { id: 2, category: "Jeans", brand: "Levis", price: 2500 },
    { id: 3, category: "Jeans", brand: "Pepe", price: 2100 },
    { id: 4, category: "Jeans", brand: "Pepe", price: 2700 },
    { id: 5, category: "Jeans", brand: "Wrangler", price: 2200 },
  ];

  function handleClick() {
    localStorage.setItem("products", JSON.stringify(products));
    setMsg("updated");
  }

  return (
    <div className="box1">
      <h3>We have got data of products</h3>
      <br />
      {msg === "" && <button onClick={handleClick}>Update Inventory</button>}
      {msg === "updated" && <p className="bg1 p1">Inventory Updated</p>}
    </div>
  );
}

export default Store;
