import React, { useEffect, useState } from "react";
import FindPartnerCard from "./FindPartnerCard";
import { toast } from "react-toastify";

const FindParters = () => {
  const [partners, setParners] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/partners")
      .then((res) => res.json())
      .then((data) => {
        setParners(data);
      });
  }, []);
  // console.log(partners);
  console.log(searchValue);

  // ===handleSearch===
  const handleSearch = () => {
     const searchPartner = partners.filter((partner) =>
      partner.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setParners(searchPartner)
  };
  return (
    <div>
      <div className="">
        <h1 className="text-3xl text-primary text-center font-bold">
          Find Your Partner
        </h1>
      </div>
      <div className="divider"></div>
      {/* ===== Header ===== */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <div className="w-full space-x-4 mb-3 md:mb-0">
          <label className="font-semibold text-accent">Sort by:</label>
          <select className="select select-bordered w-fit  ">
            <option value="default">Default</option>
            <option value="name">Name</option>
            <option value="experience">Experience Level</option>
          </select>
        </div>
        {/* ==== search section ==== */}
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search by name..."
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            className="input input-bordered w-full md:w-64"
          />
          <button onClick={handleSearch} className="btn btn-primary text-white">
            Search
          </button>
        </div>
      </div>{" "}
      <main className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
        {partners.map((partner) => (
          <FindPartnerCard key={partner._id} Partner={partner} />
        ))}
      </main>
    </div>
  );
};

export default FindParters;
