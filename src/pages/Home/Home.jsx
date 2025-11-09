import React from "react";
import HeroBanner from "./HeroBannar";
import PartnerCard from "../../components/PartnerCard";

const Home = () => {
  return (
    <div>
      <header>
        <HeroBanner />
      </header>
      <main>
          <h1 className="text-3xl text-primary font-bold text-center my-10">
            Top Study Partners
          </h1>
        <section className="w-9/12 mx-auto grid grid-cols-3 gap-2 items-center">
          <PartnerCard/>
          <PartnerCard/>
          <PartnerCard/>
        </section>

      </main>
    </div>
  );
};

export default Home;
