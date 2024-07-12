import React from "react";

function Filler() {
  let date = new Date().toISOString;
  let time = new Date().toTimeString();
  return (
    <>
      <div>
        <h1>The date is: {date}</h1>
        <h2>The time is: {time}</h2>
      </div>
      <ol className="list-">
        <li>Banana</li>
        <li>Apple</li>kkkkjjk
        <li>Orange</li>
      </ol>
    </>
  );
}

export default Filler;
