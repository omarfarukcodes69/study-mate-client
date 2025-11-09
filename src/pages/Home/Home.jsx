import React from "react";
import HeroBanner from "./HeroBannar";
import PartnerCard from "../../components/PartnerCard";
import HowItWorks from "./HowItWorks";

const Home = () => {
  return (
    <div>
      <header>
        <HeroBanner />
      </header>
      <main>
        <section>
          <h1 className="text-3xl text-primary font-bold text-center my-10">
            Top Study Partners
          </h1>
          <div className="w-9/12 mx-auto grid grid-cols-3 gap-2 items-center">
            <PartnerCard />
            <PartnerCard />
            <PartnerCard />
          </div>
        </section>
        <section className=" mx-auto bg-base-content rounded-3xl">
          <h1 className="text-3xl w-fit text-primary bg-base-100 mx-auto p-2  rounded-b-2xl font-bold text-center my-10 shadow">
            How It Works
          </h1>
          <div className="w-9/12 mx-auto mb-10 pb-10  ">
            <HowItWorks />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
