/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { data } from "./utils/mockups/mockup";
import { Container } from "@material-ui/core";
//components
import Offers from "./components/Offers";
import Characteristics from "./components/Characteristics";
import Prices from "./components/Prices";

import { GlobalProvider } from "./globalState";
import InputForm from "./components/InputForm";

const App = () => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  return (
    <GlobalProvider>
      <Container>
        <div className="w-full h-screen">
          <h1 className="flex text-center items-center px-16 py-5">
            PRUEBA FRONT
          </h1>
          <div className="flex flex-col lg:grid lg:gap-4 2xl:gap-6 lg:grid-cols-4 2xl:row-span-2 2xl:pb-8 ml-2 pt-4 px-6">
            <InputForm />
            {/* <Offers dataSelect={dataSelect} />
            <Characteristics dataSelect={dataSelect} />*/}
            <Prices />
          </div>
        </div>
      </Container>
    </GlobalProvider>
  );
};

export default App;
