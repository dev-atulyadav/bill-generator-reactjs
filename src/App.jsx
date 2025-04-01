import React, { useContext } from "react";
import InputsForm from "./components/InputsForm";
import Invoice from "./components/Invoice";
import CurrentFormContext from "./contexts/CurrentFormState";
const App = () => {
  const { currentForm } = useContext(CurrentFormContext);
  return (
    <section className="">
      {currentForm >= 4 ? (
        <Invoice />
      ) : (
        <div className="flex flex-col gap-6 justify-center items-center p-4">
          <h1 className="text-4xl font-bold">Invoice Generator</h1>
          <InputsForm />
        </div>
      )}
    </section>
  );
};

export default App;
