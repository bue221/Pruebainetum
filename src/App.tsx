/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
//material ui
import { Container } from "@material-ui/core";
//components
import Offers from "./components/Offers";
import Characteristics from "./components/Characteristics";
import Prices from "./components/Prices";
import InputForm from "./components/InputForm";
//global context
import { GlobalProvider } from "./globalState";

const App = () => {
  return (
    <GlobalProvider>
      <Container>
        <div className="w-full h-screen">
          <h1 className="flex text-center items-center px-16 py-5">
            PRUEBA FRONT
          </h1>
          <div className="flex flex-col lg:grid lg:gap-4 2xl:gap-6 lg:grid-cols-4 2xl:row-span-2 2xl:pb-8 ml-2 pt-4 px-6">
            <InputForm />
            <Offers />
            <Characteristics />
            <Prices />
          </div>
        </div>
      </Container>
    </GlobalProvider>
  );
};

export default App;
