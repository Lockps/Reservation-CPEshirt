import React, { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    id: "",
    nickname: "",
    tel: "",
    nameScreen: "",
    Number: "",
    Size: "",
  });

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <FormContext.Provider value={{ formData, updateField }}>
      {children}
    </FormContext.Provider>
  );
};
