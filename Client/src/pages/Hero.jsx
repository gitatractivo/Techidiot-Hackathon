import React from "react";
import MediaControlCard from "../components/CardComponent";
import Faqs from "./Faqs";

const Hero = () => {
  return (
    <section>
      <div className="mx-auto py-56 px-20 z-[-1] bg-hero-pattern-3 bg-center bg-cover bg-no-repeat">
        <div className={`flex flex-col gap-24`}>
          {/* CHILD 1 */}
          <div className="flex flex-col md:justify-center md:items-center">
            <h1 className="font-bold tracking-wide text-[4rem] mb-3 text-white">
              You deserve to be happy.
            </h1>
            <p className="font-normal leading-8 text-white text-[2rem]">
              What type of therapy are you looking for?
            </p>
          </div>
          {/* CHILD 2 */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-10">
            <div>
              <MediaControlCard heading="Individual" para="for my self"></MediaControlCard>
            </div>
            <div>
              <MediaControlCard heading="Couples" para="for me and my partner"></MediaControlCard>
            </div>
            <div>
              <MediaControlCard heading="Teen" para="for my child"></MediaControlCard>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ section  */}
      <div>
        <Faqs/>
      </div>
      {/* How does it Work Section */}
      <div>
        
      </div>
    </section>
  );
};

export default Hero;
