import React from "react";
import Header from "./Header";
import Filler from "./Filler";
import Filler1 from "./Filler1";
import Prop1 from "./Prop1";
import Form from "./Form";
import Seperator from "./Seperator";
import Events from "./Events";

function App() {
  return (
    <>
      <Header></Header>
      <Seperator title="Date / Fruit"></Seperator>

      <Filler></Filler>

      <Filler1></Filler1>

      <Seperator title="Props"></Seperator>

      <Prop1></Prop1>
      <Seperator title="Props Form"></Seperator>

      <Form></Form>
      <Seperator title="Events"></Seperator>
      <Events></Events>
    </>
  );
}
export default App;
