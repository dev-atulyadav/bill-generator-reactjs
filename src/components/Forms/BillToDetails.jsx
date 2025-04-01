import React, { useContext, useState } from "react";
import InvoiceDataContext from "../../contexts/InvoiceDataState";
import CurrentFormContext from "../../contexts/CurrentFormState";
import { motion } from "framer-motion";

const BillToDetails = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [GSTIN, setGSTIN] = useState("");
  const [state, setState] = useState("");
  const [stateCode, setStateCode] = useState("");
  const [pinCode, setPinCode] = useState("");
  const { invoiceData, setInvoiceData } = useContext(InvoiceDataContext);
  const { handlePreviousForm, handleNextForm } = useContext(CurrentFormContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInvoiceData({
      ...invoiceData,
      billTo: { name, address, GSTIN, state, stateCode, pinCode },
    });
    handleNextForm();
    console.log(invoiceData);
  };
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-2xl font-bold mb-6 text-gray-800"
      >
        Bill To Details
      </motion.h1>
      <motion.form
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              defaultValue={
                invoiceData.billToName == "" ? name : invoiceData.billToName
              }
              type="text"
              id="name"
              className="mt-1 block w-full px极3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              onChange={(e) => setAddress(e.target.value)}
              defaultValue={
                invoiceData.billToAddress == ""
                  ? address
                  : invoiceData.billToAddress
              }
              type="text"
              id="address"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:极outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="GSTIN"
              className="block text-sm font-medium text-gray-700"
            >
              GSTIN
            </label>
            <input
              onChange={(e) => setGSTIN(e.target.value)}
              defaultValue={
                invoiceData.billToGSTIN == "" ? GSTIN : invoiceData.billToGSTIN
              }
              type="text"
              id="GSTIN"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-700"
            >
              State
            </label>
            <input
              onChange={(e) => setState(e.target.value)}
              defaultValue={
                invoiceData.billToState == "" ? state : invoiceData.billToState
              }
              type="text"
              id="state"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="stateCode"
              className="block text-sm font-medium text-gray-700"
            >
              State Code
            </label>
            <input
              onChange={(e) => setStateCode(e.target.value)}
              defaultValue={
                invoiceData.billToStateCode == ""
                  ? stateCode
                  : invoiceData.billToStateCode
              }
              type="text"
              id="stateCode"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="pinCode"
              className="block text-sm font-medium text-gray-700"
            >
              Pin Code
            </label>
            <input
              onChange={(e) => setPinCode(e.target.value)}
              defaultValue={
                invoiceData.billToPinCode == ""
                  ? pinCode
                  : invoiceData.billToPinCode
              }
              type="text"
              id="pinCode"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="flex justify-between pt-6">
          <button
            onClick={handlePreviousForm}
            type="button"
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-md transition-colors duration-200"
          >
            Go Back
          </button>
          <button
            onClick={handleSubmit}
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-md transition-colors duration-200"
          >
            Next
          </button>
        </div>
      </motion.form>
    </motion.div>
  );
};

export default BillToDetails;
