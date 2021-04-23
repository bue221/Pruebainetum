import React, { useContext } from "react";
import { GlobalContext } from "../../globalState";

const Offers = () => {
  const { Offer: dataSelect } = useContext(GlobalContext);
  return (
    <div className="flex items-center flex-col bg-white-900 lg:order-2 lg:row-span-1 2xl:row-span-1 lg:col-span-2 rounded-lg shadow-xl pb-4 mb-5 lg:mb-0">
      <div className="mx-8 2xl:mx-10 my-10 h-full">
        {dataSelect.length > 0 ? (
          <>
            <h1>
              <strong>ID:</strong> {dataSelect[0].versions[0].id}
            </h1>
            <h1>
              <strong>NAME:</strong> : {dataSelect[0].versions[0].name}
            </h1>
          </>
        ) : (
          <h1>SELECT A OFFER PLEASE</h1>
        )}
      </div>
    </div>
  );
};

export default Offers;
