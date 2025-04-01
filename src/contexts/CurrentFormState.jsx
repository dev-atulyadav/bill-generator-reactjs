import { createContext, useState } from "react";

const CurrentFormContext = createContext();

export default CurrentFormContext;

export const CurrentFormState = ({ children }) => {
  const [currentForm, setCurrentForm] = useState(0);
  const handleNextForm = () => {
    setCurrentForm(currentForm + 1);
  };
  const handlePreviousForm = () => {
    setCurrentForm(currentForm - 1);
  };
  return (
    <CurrentFormContext.Provider
      value={{
        currentForm,
        handleNextForm,
        handlePreviousForm,
      }}
    >
      {children}
    </CurrentFormContext.Provider>
  );
};
