import React from "react";
import TherapistCard from "../components/TherapistCard";
import DoctorsData from "../DoctorsData";
import { Button } from "@mui/material";

const Therapist = () => {
  const dataSet = DoctorsData;
  console.log(DoctorsData);
  return (
    <div>
      <div className="relative bg-hero-pattern-4 h-[70vh] bg-center bg-cover bg-no-repeat z-[-1] opacity-80">
        <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-[-1]"></div>
        <div className="flex flex-col gap-y-10 w-5/6 mx-auto pt-10">
          <h1 className="text-white text-[4rem]">
            We have the best professionals - licensed and verified, who can help
            you heal!
          </h1>
          <p className="text-white text-[2rem]">
            Not sure how to choose a counselling therapist?
          </p>
          <div className="mt-14">
            <a href="#therapist">
              <Button variant="contained" color="primary" className="w-1/2  z-[10]">
                Get Started
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className="w-5/6 mx-auto mt-10" id="therapist">
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
