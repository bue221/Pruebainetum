import React, { useContext } from "react";
import { GlobalContext } from "../../globalState";

const Characteristics = () => {
  const { Offer: dataSelect } = useContext(GlobalContext);

  return (
    <div className="bg-white-900 lg:order-3 lg:col-span-2 rounded-lg shadow-xl">
      <div className="mx-8 2xl:mx-10 my-10 h-full">
        <h1 className="text-center text-xl font-black m-6 ">
          Characteristics of the offer
        </h1>
        {dataSelect.length > 0 &&
          dataSelect[0]?.versions[0]?.characteristics.map(
            (i: any, index: number) => (
              <div className="flex justify-between" key={index}>
                {i.versions.map((i: any, index: number) => (
                  <div
                    className="flex justify-between items-center w-full m-2"
                    key={index}
                  >
                    <h1 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                      {i.name}:
                    </h1>
                    <h1 className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                      {i.displayValue ? i.displayValue : "none"}
                    </h1>
                  </div>
                ))}
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default Characteristics;
