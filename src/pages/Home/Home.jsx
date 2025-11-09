import React from "react";
import HeroBanner from "./HeroBannar";

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
        </section>
      </main>
    </div>
  );
};

export default Home;
