import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { InvoiceDataState } from "./contexts/InvoiceDataState.jsx";
import { CurrentFormState } from "./contexts/CurrentFormState.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CurrentFormState>
      <InvoiceDataState>
        <App />
      </InvoiceDataState>
    </CurrentFormState>
  </StrictMode>
);
