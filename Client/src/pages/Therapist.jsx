import React from "react";
import TherapistCard from "../components/TherapistCard";
import Data from "../Data";

const Therapist = () => {
  const dataSet = Data;
  return (
    <div className="w-5/6 mx-auto mt-10">
      <div>
        <div className="grid grid-cols-1 gap-y-20 md:grid-cols-3 md:gap-y-5 md:gap-x-5">
          {dataSet.map((data) => {
            return <TherapistCard dataSet={data} key={data.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Therapist;
