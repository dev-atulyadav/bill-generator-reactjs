import React from "react";

const Invoice = () => {
  return (
    <div className="max-w-3xl h-screen mx-auto bg-white p-6 shadow-lg rounded-xl border border-gray-200">
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
          Abc Street, Saddarpur, Sector 45, Noida, U.P. 201303
        </p>
        <p className="text-sm text-gray-600 font-semibold">
          Ph No: 9810000000, Email: rpsadvertisingsample@gmail.com
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm border-b">
        <div className="py-4">
          <p>
            <strong>Invoice No:</strong> RPS-0068
          </p>
          <p>
            <strong>Date:</strong> 28-March-2025
          </p>
          <p>
            <strong>Place of Supply:</strong> Noida
          </p>
        </div>
        <div className="border-l py-4 ml-[2px] pl-4">
          <p>
            <strong>Transport:</strong> -
          </p>
          <p>
            <strong>Vehicle No:</strong> -
          </p>
          <p>
            <strong>Station:</strong> -
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="py-4">
          <p>
            <strong>Bill To:</strong>
          </p>
          <p>
            <strong>Name:</strong> Sample
          </p>
          <p>
            <strong>Address:</strong> Abc Street, Noida, U.P. 201303
          </p>
          <p>
            <strong>GSTIN:</strong> 29GGGGG1314R9Z6
          </p>
          <p>
            <strong>State:</strong> Uttar Pradesh
          </p>
          <p>
            <strong>State Code:</strong> UP
          </p>
        </div>
        <div className="border-l py-4 ml-[2px] pl-4">
          <p>
            <strong>Ship To:</strong>
          </p>
          <p>
            <strong>Name:</strong> Sample
          </p>
          <p>
            <strong>Address:</strong> Abc Street, Noida, U.P. 201303
          </p>
          <p>
            <strong>GSTIN:</strong> 29GGGGG1314R9Z6
          </p>
          <p>
            <strong>State:</strong> Uttar Pradesh
          </p>
          <p>
            <strong>State Code:</strong> UP
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
          <tr>
            <td className="border p-2 text-center">1</td>
            <td className="border p-2">Sticker PVC (NHM)</td>
            <td className="border p-2 text-center">2600</td>
            <td className="border p-2 text-right">1.70</td>
            <td className="border p-2 text-right">4420</td>
          </tr>
          <tr>
            <td className="border p-2 text-center">2</td>
            <td className="border p-2">Box Sticker</td>
            <td className="border p-2 text-center">510</td>
            <td className="border p-2 text-right">0.40</td>
            <td className="border p-2 text-right">200</td>
          </tr>
        </tbody>
      </table>
      <div className="text-right mt-4 text-sm">
        <p>
          <strong>Total:</strong> 4620
        </p>
        <p>CGST @ 9%: 415.5</p>
        <p>SGST @ 9%: 415.5</p>
        <p className="border-t font-semibold">
          Total Amount (Incl. Tax): 5451.6
        </p>
      </div>
      <p className="text-sm mt-4">
        <strong>In Words:</strong> Five Thousand Four Hundred Fifty-One and Six
        Paisa
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
