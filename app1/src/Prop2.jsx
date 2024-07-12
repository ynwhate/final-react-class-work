import React from "react";

export default function Prop2(prop, i) {
  return (
    <>
      <ul>
        <li key={i}>{prop.name}</li>
        <li key={i}>{prop.id}</li>
      </ul>
      {console.log(i)}
    </>
  );
}
