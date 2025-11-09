import React, { useEffect, useState } from "react";
import PartnerCard from "../../components/PartnerCard";

const FindParters = () => {
  const [partners, setParners] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/partners")
      .then((res) => res.json())
      .then((data) => {
        setParners(data);
      });
  }, []);
  console.log(partners);
  return (
    <div>
      .{" "}
      <div className="">
        <h1 className="text-3xl text-primary text-center font-bold">
          Find Your Partner
        </h1>
      </div>
      <div className="divider"></div>
      <main className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
        {partners.map((partner) => (
          <PartnerCard key={partner._id} Partner={partner} />
        ))}
      </main>
    </div>
  );
};

export default FindParters;
