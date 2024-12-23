import React, { useState } from "react";
import "../index.css";
import Information from "./Information";
import ShirtSize from "./ShirtSize";

const Form = () => {
  const [widget, setWidget] = useState(1);

  const NextHandle = () => {
    setWidget(widget + 1);
  };

  const widgetMapping = {
    0: <Information NextHandler={NextHandle} />,
    1: <ShirtSize />,
  };

  return (
    <div className="h-full w-full">
      {widgetMapping[widget] || <p>Widget not found</p>}

      <div className="flex justify-center mt-6 space-x-4">
        {Object.keys(widgetMapping).map((key) => (
          <button
            key={key}
            onClick={() => setWidget(Number(key))}
            className={`px-6 py-3 rounded-full shadow-md ${
              widget === Number(key)
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-400"
            }`}
          >
            Widget {key}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Form;
