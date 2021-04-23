import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../globalState";
//material ui
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const InputForm = () => {
  const { Offers, select: SelectOffer } = useContext(GlobalContext);
  //select state
  const [select, setSelect] = React.useState("");

  const handleChange = (e: any): void => {
    setSelect(e.target.value);
  };

  useEffect(() => {
    if (select) SelectOffer(select);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [select]);

  return (
    <div className="bg-white-600 lg:order-1 lg:row-span-1 2xl:row-span-1 lg:col-span-2 rounded-lg shadow-xl mb-5 lg:mb-0">
      <div className="p-16">
        <InputLabel id="demo-simple-select-label">Select a Offer</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={select}
          onChange={handleChange}
          fullWidth
          placeholder='LAPTOP X16P NEURON A PNTNM 14" LCD LANX'
        >
          {Offers.map((i: any) => (
            <MenuItem key={i.id} value={i.id}>
              {i.versions[0].name}
            </MenuItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default InputForm;
