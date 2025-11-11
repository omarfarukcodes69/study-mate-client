// PartnerDetails.jsx
import React, { use, useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useParams } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../context/AuthContext/AuthContext";

const PartnerDetails = () => {
  const { user } = use(AuthContext);
  const [partnerInfo, setPartnerInfo] = useState([]);
  //  const [patnersCount, setPatnersCount] = useState(patnerCount);
  const [partnersCount, setPartnersCount] = useState(0);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    fetch(`http://localhost:3000/partner/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPartnerInfo(data);
        setPartnersCount(data.patnerCount || 0);
        // console.log(data);
      })
      .catch((error) => toast.error(error));
    // console.log(id);
  }, [id]);

  const {
    _id,
    name,
    email,
    rating,
    subject,
    availability,
    studyMode,
    location,
    experienceLevel,
    profileimage,
  } = partnerInfo;
  // console.log(partnersCount);
  // console.log(name,email)

  // ==== dend requested ===
  const handleSendRequest = () => {
    if (!user) return toast.error("You must be logged in to send a request");
    // Increment partner count
    const newCount = partnersCount + 1;
    setPartnersCount(newCount);
    // Simulate saving data to "requests" collection
    const requestData = {
      partnerId: _id,
      partnerName: name,
      partnerImg: profileimage,
      partnerSubject: subject,
      partnerStudyMode: studyMode,
      partnerEmail: email,
      userName: user.displayName,
      userEmail: user.email,
      date: new Date().toISOString(),
    };
    // const newProductCount= partnersCount
    // === update partnerCount Added in backend ======
    fetch(`http://localhost:3000/partners/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ patnerCount: newCount }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // Optionally handle errors if your backend returns a success flag
        if (!data.success) {
          toast.error("Failed to update partner count");
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to update partner count");
      });

    // ===== new collection added ====
    fetch("http://localhost:3000/connections/sent-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestData),
    })
      .then((res) => res.json())
      .then(() => {
        // console.log("afer data base ", data);
        toast.success("Partner request sent successfully!");
      });
    console.log("Sending partner request:", requestData);
  };

  return (
    <div className="w-4xl mx-auto border-2 border-primary p-8 bg-white rounded-lg shadow-lg my-12">
      <div className="flex items-center space-x-8">
        <img
          src={profileimage}
          alt=""
          className="w-52 h-52 rounded-full object-cover border-4 border-primary"
        />
        <div className="space-y-1">
          <h1 className="text-3xl font-bold text-primary">{name}</h1>
          <div className="flex items-center text-xl mt-5 space-x-1 text-yellow-500">
            ☆
            {Array.from({ length: 5 }).map((_, i) => (
              <span className="text-xl font-bold" key={i}>
                {i < rating ? <FaStar /> : <FaRegStar />}
              </span>
            ))}
            <span className="text-accent ml-2">({rating} / 5)</span>
          </div>
        </div>
      </div>
      <span className="divider"></span>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
        <div>
          <strong className="text-lg text-primary">Subject:</strong>{" "}
          <span className="text-lg text-secondary"> {subject}</span>
        </div>
        <div>
          <strong className="text-lg text-primary">Study Mode:</strong>{" "}
          <span className="text-lg text-secondary">{studyMode}</span>
        </div>
        <div>
          <strong className="text-lg text-primary">Availability:</strong>{" "}
          <span className="text-lg text-secondary">{availability}</span>
        </div>
        <div>
          <strong className="text-lg text-primary">Location:</strong>{" "}
          <span className="text-lg text-secondary"> {location}</span>
        </div>
        <div>
          <strong className="text-lg text-primary">Experience Level:</strong>{" "}
          <span className="text-lg text-secondary">{experienceLevel}</span>
        </div>
        <div>
          <strong className="text-lg text-primary">Partner Count:</strong>{" "}
          <span className="text-lg text-secondary"> {partnersCount}</span>
        </div>
      </div>
      <span className="divider"></span>
      <div className="flex justify-end">
        <button
          onClick={handleSendRequest}
          className="btn btn-primary hover:btn-primary"
        >
          Send Partner Request
        </button>
      </div>
    </div>
  );
};

export default PartnerDetails;
