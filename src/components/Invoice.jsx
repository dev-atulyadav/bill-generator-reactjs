import React, { useContext } from "react";
import InvoiceDataContext from "../contexts/InvoiceDataState";
import { ToWords } from "to-words";

const Invoice = () => {
  const toWords = new ToWords({
    localeCode: "en-IN",
    converterOptions: {
      currency: true,
      ignoreDecimal: false,
      ignoreZeroCurrency: false,
      doNotAddOnly: false,
      currencyOptions: {
        // can be used to override defaults for the selected locale
        name: "Rupee",
        plural: "Rupees",
        symbol: "₹",
        fractionalUnit: {
          name: "Paisa",
          plural: "Paise",
          symbol: "",
        },
      },
    },
  });
  const { invoiceData } = useContext(InvoiceDataContext);
  return (
    <div className="max-w-3xl h-screen mx-auto bg-white p-6 shadow-lg rounded-xl border border-gray-200 overflow-scroll">
      <div className="flex justify-center mb-4 items-center relative">
        <p className="text-sm font-semibold absolute bottom-0 left-0">
          GSTIN: 29GGGGG1314R9Z6
        </p>
        <h1 className="text-xl font-bold text-center">TAX INVOICE</h1>
      </div>
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold">RPS ADVERTISING</h2>
        <p className="text-sm text-gray-600 w-[60%]">
          <span className="font-semibold">Specialist In:</span> Flex Printing,
          Sunboard Printing, Sunpack Printing, Offset Printing & All Types of
          Printing available.
        </p>
        <p className="text-sm text-gray-600">
          Shop No. 4, Saddarpur, Sector 45, Noida, U.P. 201303
        </p>
        <p className="text-sm text-gray-600 font-semibold">
          Ph No: 9810000000, Email: rpsadvertising@gmail.com
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm border-b">
        <div className="py-4">
          <p>
            <strong>Invoice No:</strong> {invoiceData.invoiceNo}
          </p>
          <p>
            <strong>Date:</strong> {invoiceData.date}
          </p>
          <p>
            <strong>Place of Supply:</strong> {invoiceData.placeOfSupply}
          </p>
        </div>
        <div className="border-l py-4 ml-[2px] pl-4">
          <p>
            <strong>Transport:</strong> {invoiceData.transport}
          </p>
          <p>
            <strong>Vehicle No:</strong> {invoiceData.vehicleNo}
          </p>
          <p>
            <strong>Station:</strong> {invoiceData.station}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="py-4">
          <p>
            <strong>Bill To:</strong>
          </p>
          <p>
            <strong>Name:</strong> {invoiceData.billTo.name}
          </p>
          <p>
            <strong>Address:</strong> {invoiceData.billTo.address}{" "}
            {invoiceData.billTo.pinCode}
          </p>
          <p>
            <strong>GSTIN:</strong> {invoiceData.billTo.GSTIN}
          </p>
          <p>
            <strong>State:</strong> {invoiceData.billTo.state}
          </p>
          <p>
            <strong>State Code:</strong> {invoiceData.billTo.stateCode}
          </p>
        </div>
        <div className="border-l py-4 ml-[2px] pl-4">
          <p>
            <strong>Ship To:</strong>
          </p>
          <p>
            <strong>Name:</strong> {invoiceData.shipTo.name}
          </p>
          <p>
            <strong>Address:</strong> {invoiceData.shipTo.address}{" "}
          </p>
          <p>
            <strong>GSTIN:</strong> {invoiceData.shipTo.GSTIN}
          </p>
          <p>
            <strong>State:</strong> {invoiceData.shipTo.state}
          </p>
          <p>
            <strong>State Code:</strong> {invoiceData.shipTo.stateCode}
          </p>
        </div>
      </div>
      <table className="w-full border text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">S.No</th>
            <th className="border p-2">Description of Goods</th>
            <th className="border p-2">Quantity</th>
            <th className="border p-2">Rate</th>
            <th className="border p-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {invoiceData.items.map((item, index) => (
            <tr key={index}>
              <td className="border p-2 text-center">{index + 1}</td>
              <td className="border p-2">{item.name}</td>
              <td className="border p-2 text-center">{item.quantity}</td>
              <td className="border p-2 text-right">{item.price}</td>
              <td className="border p-2 text-right">{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-right mt-4 text-sm">
        <p>
          <strong>Total:</strong> {invoiceData.totalAmountInclGST.baseAmount}
        </p>
        <p>CGST @ 9%: {invoiceData.totalAmountInclGST.CGST}</p>
        <p>SGST @ 9%: {invoiceData.totalAmountInclGST.SGST}</p>
        <p className="border-t font-semibold">
          Total Amount (Incl. Tax): {invoiceData.totalAmountInclGST.totalAmount}
        </p>
      </div>
      <p className="text-sm mt-4">
        <strong>In Words:</strong>{" "}
        {toWords.convert(invoiceData.totalAmountInclGST.totalAmount, {
          currency: true,
        })}
      </p>
      <p className="text-xs text-gray-600 mt-2">
        Terms & Conditions: Goods once sold will not be taken back. Interest
        @18% p.a. will be charged if payment is delayed.
      </p>
      <div className="text-right mt-6">
        <p className="font-semibold">For RPS ADVERTISING</p>
        <p className="text-sm">Authorized Signatory</p>
      </div>
    </div>
  );
};

export default Invoice;
