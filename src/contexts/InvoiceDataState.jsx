import { createContext, useState } from "react";

const InvoiceDataContext = createContext();

export default InvoiceDataContext;

export const InvoiceDataState = ({ children }) => {
  const [invoiceData, setInvoiceData] = useState({});

  return (
    <InvoiceDataContext.Provider value={{ invoiceData, setInvoiceData }}>
      {children}
    </InvoiceDataContext.Provider>
  );
};
