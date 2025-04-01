import React from "react";
import InvoiceDetails from "./Forms/InvoiceDetails";
import BillToDetails from "./Forms/BillToDetails";
import ShipToDetails from "./Forms/ShipToDetails";
import ItemsDetails from "./Forms/ItemsDetails";
import { useContext } from "react";
import CurrentFormState from "../contexts/CurrentFormState";

const InputsForm = () => {
  const { currentForm, setCurrentForm } = useContext(CurrentFormState);
  return (
    <div className="flex flex-col gap-6">
      {currentForm === 0 && <InvoiceDetails />}
      {currentForm === 1 && <BillToDetails />}
      {currentForm === 2 && <ShipToDetails />}
      {currentForm === 3 && <ItemsDetails />}
    </div>
  );
};

export default InputsForm;
