import React from "react";
import MediaControlCard from "../components/CardComponent";
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <section>
      <div className="w-5/6 mx-auto py-56 px-20 z-[-1] bg-hero">
        <div className="flex flex-col gap-12 bg-hero">
          <div>
            <h1 className="font-bold tracking-wide text-[2rem]">
              You deserve to be happy.
            </h1>
            <p>What type of therapy are you looking for?</p>
          </div>
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
