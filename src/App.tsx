/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { data } from "./utils/mockups/mockup";
import { Container } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Offers from "./components/Offers";
import Characteristics from "./components/Characteristics";
import Prices from "./components/Prices";

const App = () => {
  //select state
  const [select, setSelect] = React.useState("");
  //data state
  const [dataSelect, setDataSelect] = React.useState<any>(null);

  const filterData = (): void => {
    const filterInfo = data.filter((i) => i.id === select);
    setDataSelect(filterInfo);
  };

  useEffect(() => {
    if (select) filterData();
    console.log(dataSelect);
  }, [select]);

  const handleChange = (e: any): void => {
    setSelect(e.target.value);
  };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  return (
    <Container>
      <div className="w-full h-screen">
        <h1 className="flex text-center items-center px-16 py-5">
          PRUEBA FRONT
        </h1>
        <div className="flex flex-col lg:grid lg:gap-4 2xl:gap-6 lg:grid-cols-4 2xl:row-span-2 2xl:pb-8 ml-2 pt-4 px-6">
          {/* select form */}
          <div className="bg-white-600 lg:order-1 lg:row-span-1 2xl:row-span-1 lg:col-span-2 rounded-lg shadow-xl mb-5 lg:mb-0">
            <div className="p-16">
              <InputLabel id="demo-simple-select-label">
                Select a Offer
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={select}
                onChange={handleChange}
                fullWidth
                placeholder='LAPTOP X16P NEURON A PNTNM 14" LCD LANX'
              >
                {data.map((i) => (
                  <MenuItem value={i.id}>{i.versions[0].name}</MenuItem>
                ))}
              </Select>
            </div>
          </div>
          {/* end form */}
          <Offers dataSelect={dataSelect} />
          <Characteristics dataSelect={dataSelect} />
          <Prices dataSelect={dataSelect} formatter={formatter} />
        </div>
      </div>
    </Container>
  );
};

export default App;
