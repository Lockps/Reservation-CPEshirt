import React, { useState } from "react";
import "../index.css";
import Information from "./Information";
import ShirtSize from "./ShirtSize";

const Form = () => {
  const [isClick, setisClick] = useState(true);

  const ClickHandle = () => {
    setisClick(!isClick);
  };
  return (
    <div className="h-full w-full">
      {isClick ? <ShirtSize /> : <Information ClickHandle={ClickHandle} />}
    </div>
  );
};

export default Form;
