import React from "react";

const Prices = ({
  dataSelect,
  formatter,
}: {
  dataSelect: any;
  formatter: any;
}) => {
  return (
    <div className="bg-white-900 lg:col-span-2 rounded-lg shadow-xl lg:order-4">
      <div className="mx-8 2xl:mx-10 my-10 h-full">
        {dataSelect &&
          dataSelect[0].versions[0].productOfferingPrices.map((i: any) => (
            <div className="text-center">
              {i.versions.map((i: any) => (
                <div className="m-9">
                  <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                    {i.name}
                  </h2>
                  <h5 className="text-2xl font-black ">
                    {formatter.format(i.price.amount)}
                  </h5>
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Prices;
