import React, { useContext, useState } from "react";
import InvoiceDataContext from "../../contexts/InvoiceDataState";
import CurrentFormContext from "../../contexts/CurrentFormState";
import { motion } from "framer-motion";

const InvoiceDetails = () => {
  const [invoiceNo, setInvoiceNo] = useState("RPS-001");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [placeOfSupply, setPlaceOfSupply] = useState("");
  const [transport, setTransport] = useState("");
  const [station, setStation] = useState("");
  const [vehicleNo, setVehicleNo] = useState("");
  const { invoiceData, setInvoiceData } = useContext(InvoiceDataContext);
  const { handleNextForm } = useContext(CurrentFormContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInvoiceData({
      ...invoiceData,
      invoiceNo,
      date,
      placeOfSupply,
      transport,
      station,
      vehicleNo,
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
        Invoice Details
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
              htmlFor="invoiceNo"
              className="block text-sm font-medium text-gray-700"
            >
              Invoice No
            </label>
            <input
              onChange={(e) => setInvoiceNo(e.target.value)}
              defaultValue={
                invoiceData.invoiceNo == "" ? invoiceNo : invoiceData.invoiceNo
              }
              type="text"
              id="invoiceNo"
              className="mt极1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              Date
            </label>
            <input
              onChange={(e) => setDate(e.target.value)}
              defaultValue={invoiceData.date == "" ? date : invoiceData.date}
              type="date"
              id="date"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="placeOfSupply"
              className="block text-sm font-medium text-gray-700"
            >
              Place of Supply
            </label>
            <input
              onChange={(e) => setPlaceOfSupply(e.target.value)}
              defaultValue={
                invoiceData.placeOfSupply == ""
                  ? placeOfSupply
                  : invoiceData.placeOfSupply
              }
              type="text"
              id="placeOfSupply"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="transport"
              className="block text-sm font-medium text-gray-700"
            >
              Transport
            </label>
            <input
              onChange={(e) => setTransport(e.target.value)}
              defaultValue={
                invoiceData.transport == "" ? transport : invoiceData.transport
              }
              type="text"
              id="transport"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="vehicleNo"
              className="block text-sm font-medium text-gray-700"
            >
              Vehicle No
            </label>
            <input
              onChange={(e) => setVehicleNo(e.target.value)}
              defaultValue={
                invoiceData.vehicleNo == "" ? vehicleNo : invoiceData.vehicleNo
              }
              type="text"
              id="vehicleNo"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="station"
              className="block text-sm font-medium text-gray-700"
            >
              Station
            </label>
            <input
              onChange={(e) => setStation(e.target.value)}
              defaultValue={
                invoiceData.station == "" ? station : invoiceData.station
              }
              type="text"
              id="station"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-md transition-colors duration-200 "
          >
            Next
          </button>
        </div>
      </motion.form>
    </motion.div>
  );
};

export default InvoiceDetails;
