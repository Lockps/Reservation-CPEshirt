import React, { useContext, useState } from "react";
import "../index.css";
import { FormContext } from "../Context/FormContext";

const Information = ({ NextHandler }) => {
  const { formData, updateField } = useContext(FormContext);
  const [errors, setErrors] = useState({
    name: "",
    surname: "",
    nickname: "",
    id: "",
    tel: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    updateField(id, value);
    // Clear error on change if field is filled
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: value ? "" : "This field is required",
    }));
  };

  const handleNext = () => {
    // Check if any required field is blank
    let newErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "This field is required";
        isValid = false;
      }
    });

    if (isValid) {
      NextHandler();
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="min-h-full w-full bg-fuchsia-400 flex flex-col items-center gap-6 p-6 sm:p-8">
      <h1 className="text-white text-2xl font-bold ">Form</h1>

      <div className="flex flex-wrap w-full gap-4 justify-center">
        <div className="flex flex-col w-full md:w-1/2">
          <label htmlFor="name" className="text-white font-medium mb-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
            placeholder="Enter your name"
            value={formData.name || ""}
            onChange={handleInputChange}
          />
          {errors.name && <span className="text-red-500">{errors.name}</span>}
        </div>

        <div className="flex flex-col w-full md:w-1/2">
          <label htmlFor="surname" className="text-white font-medium mb-1">
            Surname
          </label>
          <input
            id="surname"
            type="text"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
            placeholder="Enter your surname"
            value={formData.surname || ""}
            onChange={handleInputChange}
          />
          {errors.surname && (
            <span className="text-red-500">{errors.surname}</span>
          )}
        </div>
      </div>

      <div className="flex flex-wrap w-full gap-4 justify-center">
        <div className="flex flex-col w-full md:w-1/2">
          <label htmlFor="nickname" className="text-white font-medium mb-1">
            Nickname
          </label>
          <input
            id="nickname"
            type="text"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
            placeholder="Enter your nickname"
            value={formData.nickname || ""}
            onChange={handleInputChange}
          />
          {errors.nickname && (
            <span className="text-red-500">{errors.nickname}</span>
          )}
        </div>

        <div className="flex flex-col w-full md:w-1/2">
          <label htmlFor="id" className="text-white font-medium mb-1">
            ID
          </label>
          <input
            id="id"
            type="text"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
            placeholder="Enter your ID"
            value={formData.id || ""}
            onChange={handleInputChange}
          />
          {errors.id && <span className="text-red-500">{errors.id}</span>}
        </div>
      </div>

      <div className="flex flex-wrap w-full gap-4 justify-center">
        <div className="flex flex-col w-full md:w-1/2">
          <label htmlFor="tel" className="text-white font-medium mb-1">
            Telephone
          </label>
          <input
            id="tel"
            type="tel"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
            placeholder="Enter your telephone"
            value={formData.tel || ""}
            onChange={handleInputChange}
          />
          {errors.tel && <span className="text-red-500">{errors.tel}</span>}
        </div>
      </div>

      <button
        className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200 transition font-medium"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default Information;
