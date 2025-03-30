import React from "react";
import InputsForm from "./components/InputsForm";
import Bill from "./components/Bill";
import Invoice from "./components/Invoice";
const App = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      {/* <InputsForm /> */}
      {/* <Bill /> */}
      <Invoice />
    </section>
  );
};

export default App;
