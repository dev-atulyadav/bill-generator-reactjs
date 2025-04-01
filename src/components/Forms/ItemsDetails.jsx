import React, { useContext, useState } from "react";
import InvoiceDataContext from "../../contexts/InvoiceDataState";
import CurrentFormContext from "../../contexts/CurrentFormState";
import { motion } from "framer-motion";
import ItemTable from "./ItemTable";

const ItemsDetails = () => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState({
    name: "",
    quantity: 0,
    price: 0,
  });
  const { invoiceData, setInvoiceData } = useContext(InvoiceDataContext);
  const { handlePreviousForm, handleNextForm } = useContext(CurrentFormContext);
  const addItem = () => {
    setItems([
      ...items,
      {
        ...item,
        total: item.price * item.quantity,
      },
    ]);
    console.log(items);
  };
  const calculateTotalAmountWithGST = (baseAmount, cgstRate, sgstRate) => {
    let cgst = (baseAmount * cgstRate) / 100;
    let sgst = (baseAmount * sgstRate) / 100;
    let totalAmount = baseAmount + cgst + sgst;

    return {
      baseAmount: baseAmount,
      CGST: cgst,
      SGST: sgst,
      totalAmount: totalAmount,
    };
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };
  const handleSubmit = (e) => {
    if (items.length === 0) {
      alert("Please add at least one item");
      return;
    }
    e.preventDefault();
    setInvoiceData({
      ...invoiceData,
      items,
      totalAmountInclGST: calculateTotalAmountWithGST(
        items.reduce((acc, item) => acc + item.total, 0),
        9,
        9
      ),
    });
    handleNextForm();
    console.log(invoiceData);
  };
  return (
    <div className="flex flex-col gap-6">
      <motion.div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl font-bold mb-6 text-gray-800"
        >
          Items Details
        </motion.h1>
        <motion.form
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="itemName"
                className="block text-sm font-medium text-gray-700"
              >
                Item Name
              </label>
              <input
                onChange={(e) => setItem({ ...item, name: e.target.value })}
                type="text"
                id="itemName"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-gray-700"
              >
                Quantity
              </label>
              <input
                onChange={(e) => setItem({ ...item, quantity: e.target.value })}
                type="number"
                id="quantity"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Price
              </label>
              <input
                onChange={(e) => setItem({ ...item, price: e.target.value })}
                type="number"
                id="price"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="flex justify-between items-center gap-6 pt-6">
            <button
              onClick={handlePreviousForm}
              type="button"
              className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-md transition-colors duration-200"
            >
              Go Back
            </button>
            <button
              onClick={addItem}
              type="button"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition-colors duration-200"
            >
              Add Item
            </button>
            <button
              onClick={handleSubmit}
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-md transition-colors duration-200"
            >
              Generate Invoice
            </button>
          </div>
        </motion.form>
      </motion.div>
      <ItemTable items={items} removeItem={removeItem} />
    </div>
  );
};

export default ItemsDetails;
