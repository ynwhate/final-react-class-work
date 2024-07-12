import React from "react";

function fun(e) {
  e.preventDefault();
  alert("U clicked bi");
}

function Events() {
  return (
    <>
      <div className="content-center text-center m-13">
        <span>Press this button to call a function to alert you: </span>
        <button className="p-3 mt-5 mb-5 bg-blue-600 text-white" onClick={fun}>
          Click me yeahhh
        </button>
      </div>
    </>
  );
}

export default Events;
