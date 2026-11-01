import { useState } from "react";
import { api } from "./api";

export function AddRecord(props) {
  const [rollNumber, setRollNumber] = useState("");
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newRecord = {
      rollNumber: rollNumber,
      name: name,
      marks: Number(marks),
    };

    api
      .post("/students", newRecord)
      .then((response) => {
        const updatedStudents = [...props.students, response.data];
        props.setStudents(updatedStudents);
        props.sM(false);
      })
      .catch((error) => console.error("Failed to add student:", error));
  }
  return (
    <>
      <div
        className="hf w100 bg20 fyc"
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          opacity: "0.9",
          zIndex: 1000,
        }}
      >
        <div
          className="bg70 b1 p3"
          style={{ color: "#fff", marginTop: "1rem" }}
        >
          <form onSubmit={handleSubmit} className="fy">
            <div className="fxc jsb">
              <h3>Add Record</h3>
              <button
                onClick={() => props.sM((prev) => !prev)}
                className="bg31"
                style={{ marginLeft: "auto" }}
              >
                cancel
              </button>
            </div>
            <div className="mb1">
              <label style={{ display: "block" }}>Roll Number</label>
              <input
                type="text"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
                required
              />
            </div>
            <div className="mb1">
              <label style={{ display: "block" }}>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb1">
              <label style={{ display: "block" }}>Marks</label>
              <input
                type="number"
                value={marks}
                onChange={(e) => setMarks(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="btn2 bg50"
              style={{ marginTop: "1rem" }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
