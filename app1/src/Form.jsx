import React, { useState } from "react";
import Asker from "./Asker";

function Form() {
  const [cname, setCname] = useState("");
  const [modelno, setModelno] = useState("");

  const handleSubmit = (event) => {
    console.log(cname, modelno);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Enter your car name: </h3>
        <input
          type="text"
          value={cname}
          id="name"
          onChange={(event) => setCname(event.target.value)}
        />

        <h3>Enter your car model: </h3>
        <input
          type="number"
          value={modelno}
          id="model"
          onChange={(event) => setModelno(event.target.value)}
        />

        <button type="submit">Click me</button>
      </form>
      <Asker name={cname} model={modelno} />
    </>
  );
}

export default Form;
