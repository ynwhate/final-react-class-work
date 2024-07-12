import React from "react";

function Asker(p) {
  return (
    <>
      <table className="p-5">
        <tr>
          <th>name</th>
          <th>model no</th>
        </tr>
        <tr>
          <td>{p.name}</td>
          <td>{p.model}</td>
        </tr>
      </table>
    </>
  );
}

export default Asker;
