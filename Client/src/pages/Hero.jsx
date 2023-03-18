import React from "react";
import MediaControlCard from "../components/CardComponent";

const Hero = () => {
  return (
    <section>
      <div className="mx-auto py-56 px-20 z-[-1] bg-hero-pattern bg-center">
        <div className={`flex flex-col gap-24`}>
          {/* CHILD 1 */}
          <div className="flex flex-col md:justify-center md:items-center">
            <h1 className="font-bold tracking-wide text-[2rem] mb-3">
              You deserve to be happy.
            </h1>
            <p className="font-normal leading-8">
              What type of therapy are you looking for?
            </p>
          </div>
          {/* CHILD 2 */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-10">
            <div>
              <MediaControlCard></MediaControlCard>
            </div>
            <div>
              <MediaControlCard></MediaControlCard>
            </div>
            <div>
              <MediaControlCard></MediaControlCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
