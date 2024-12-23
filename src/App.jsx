import { useState } from "react";
import "./index.css";
import { FormProvider } from "./Context/FormContext";
import Form from "./components/Form";

function App() {
  return (
    <div className="h-screen w-screen bg-slate-300 flex justify-center items-center">
      <div className="h-[90%] w-[90%] md:w-[80%] lg:w-[70%]">
        <FormProvider>
          <Form />
        </FormProvider>
      </div>
    </div>
  );
}

export default App;
