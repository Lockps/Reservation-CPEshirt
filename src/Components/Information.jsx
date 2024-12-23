import React, { useContext } from "react";
import "../index.css";
import { FormContext } from "../Context/FormContext";

const Information = ({ ClickHandle }) => {
  const { formData, updateField } = useContext(FormContext);
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
          />
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
          />
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
          />
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
          />
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
          />
        </div>
      </div>

      <button
        className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200 transition font-medium"
        onClick={ClickHandle}
      >
        Next
      </button>
    </div>
  );
};

export default Information;
