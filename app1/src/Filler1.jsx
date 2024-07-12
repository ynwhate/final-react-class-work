import React from "react";

function Add() {
  return <h1>addition: {1 + 2}</h1>;
}

function Sub() {
  return <h1>subtraction: {1 - 2}</h1>;
}

function Filler1() {
  return (
    <>
      <Add></Add>
      <Sub></Sub>
    </>
  );
}

export default Filler1;
