// TopPartnerCard.jsx
import React from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router";

const PartnerCard = () => {
  // { name:'omar faruk', subject:'math', rating:'5', imgUrl:""}
  return (
    <div className="w-xs mb-10 bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:scale-115 hover:bg-accent  transition-transform cursor-pointer">
      <figure>
        <FaUser className="w-24 h-24 rounded-full object-cover mb-4 border-4   border-primary" />
      </figure>

      <h3 className="text-xl font-semibold text-gray-800 mb-1">{name}</h3>
      <p className=" mb-2">
        <span className="font-semibold">Subject:</span> subject
      </p>
      <p className="text-yellow-400 font-bold">Rating:"5"</p>
      <Link
        to={"/partner"}
        className="mt-4 btn btn-primary hover:btn-primary text-white rounded-md font-semibold transition"
      >
        View Profile
      </Link>
    </div>
  );
};

export default PartnerCard;
