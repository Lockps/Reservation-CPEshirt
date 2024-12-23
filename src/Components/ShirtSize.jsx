import React, { useState } from "react";
import "../index.css";

const ShirtSize = () => {
  const Size = ["s", "m", "L", "xl", "2xl", "3xl", "4xl"];
  const [rangeStart, setRangeStart] = useState(0);
  const [SelectSize, setSize] = useState(null);
  const [SelectNumber, setNumber] = useState(null);
  const [screenName, setScreenName] = useState("");

  const numberRanges = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900];
  const Numbers = Array.from({ length: 100 }, (_, i) => i + rangeStart);

  return (
    <div className="bg-gradient-to-r from-slate-400 to-blue-400 min-h-screen p-6 flex flex-col items-center">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-3xl">
        <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Select Your Shirt Size
        </h3>
        <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {Size.map((data, index) => (
            <div
              key={index}
              className={`text-center py-3 rounded-lg shadow-md cursor-pointer transition-all duration-150 text-lg font-semibold ${
                SelectSize === data
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-400"
              }`}
              onClick={() => setSize(data)}
            >
              {data.toUpperCase()}
            </div>
          ))}
        </div>
        {SelectSize && (
          <div className="mt-6 text-center">
            <p className="text-lg font-medium text-gray-700">
              Selected Size:{" "}
              <span className="text-blue-600 font-bold">
                {SelectSize.toUpperCase()}
              </span>
            </p>
          </div>
        )}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-3xl mt-8">
        <h4 className="text-xl font-semibold text-gray-800 mb-4">
          Screen Name
        </h4>
        <input
          type="text"
          value={screenName}
          onChange={(e) => setScreenName(e.target.value)}
          placeholder="Enter your screen name"
          className="w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
        />
        {screenName && (
          <div className="mt-4 text-center">
            <p className="text-lg font-medium text-gray-700">
              Screen Name:{" "}
              <span className="text-blue-600 font-bold">{screenName}</span>
            </p>
          </div>
        )}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-3xl mt-8">
        <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Select Your Favorite Number
        </h3>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Choose Number Range:
          </label>
          <select
            className="w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
            value={rangeStart}
            onChange={(e) => setRangeStart(Number(e.target.value))}
          >
            {numberRanges.map((start) => (
              <option key={start} value={start}>
                {start} - {start + 99}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-10 gap-2">
          {Numbers.map((num) => (
            <div
              key={num}
              className={`text-center py-2 rounded-lg shadow-md cursor-pointer transition-all duration-150 text-lg ${
                SelectNumber === num
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-400"
              }`}
              onClick={() => setNumber(num)}
            >
              {num}
            </div>
          ))}
        </div>
        {SelectNumber !== null && (
          <div className="mt-6 text-center">
            <p className="text-lg font-medium text-gray-700">
              Selected Number:{" "}
              <span className="text-blue-600 font-bold">{SelectNumber}</span>
            </p>
          </div>
        )}
      </div>

      <div className="w-full flex justify-center mt-10 overflow-hidden p-3">
        <button
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-200 text-lg font-semibold"
          onClick={() => {}}
        >
          Confirm Selection
        </button>
      </div>
    </div>
  );
};

export default ShirtSize;
