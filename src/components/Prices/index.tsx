import React, { useContext } from "react";
import { GlobalContext } from "../../globalState";

const Prices = () => {
  const { Offer: dataSelect } = useContext(GlobalContext);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  return (
    <div className="bg-white-900 lg:order-4 lg:col-span-2 rounded-lg shadow-xl">
      <div className="mx-8 2xl:mx-10 my-10 h-full">
        {dataSelect.length > 0 ? (
          dataSelect[0]?.versions[0]?.productOfferingPrices?.map(
            (i: any, index: number) => (
              <div className="text-center" key={index}>
                {i.versions.map((i: any, index: number) => (
                  <div className="m-9" key={index}>
                    <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                      {i.name}
                    </h2>
                    <h5 className="text-2xl font-black ">
                      {formatter.format(i.price.amount)}
                    </h5>
                  </div>
                ))}
              </div>
            )
          )
        ) : (
          <h1>NO PRICES</h1>
        )}
      </div>
    </div>
  );
};

export default Prices;
