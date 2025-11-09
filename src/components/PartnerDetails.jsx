// PartnerDetails.jsx
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PartnerDetails = ({ partner, userEmail }) => {
  //   const [partnerCount, setPartnerCount] = useState(partner.partnerCount || 0);

  const handleSendRequest = () => {
    // Increment partner count
    // setPartnerCount((prev) => prev + 1);

    // // Simulate saving data to "requests" collection
    // const requestData = {
    //   partnerId: partner.id,
    //   partnerName: partner.name,
    //   partnerEmail: partner.email,
    //   userEmail: userEmail,
    //   date: new Date().toISOString(),
    // };
    // console.log("Sending partner request:", requestData);
    // // here you would call your API to save requestData in backend

    // // Show success toast
    toast.success("Partner request sent successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg my-12">
      <div className="flex items-center space-x-8">
        <img
          src=""
          alt=""
          className="w-52 h-52 rounded-full object-cover border-4 border-primary"
        />
        <div className="space-y-1">
          <h1 className="text-3xl font-bold text-primary">partner.name</h1>
          <p className="text-accent text-xl ">partner.email</p>
          <div className="flex items-center text-md space-x-4 text-yellow-500">
            ☆
            {/* {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>{i < partner.rating ? "★" : "☆"}</span>
            ))} */}
            <span className="text-gray-500 ml-2">(partner.rating / 5)</span>
          </div>
        </div>
      </div>
      <span className="divider"></span>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
        <div>
          <strong className="text-lg text-primary">Subject:</strong>{" "}
          <span className="text-lg text-secondary"> partner.subject</span>
        </div>
        <div>
          <strong className="text-lg text-primary">Study Mode:</strong>{" "}
          <span className="text-lg text-secondary"> partner.studyMode</span>
        </div>
        <div>
          <strong className="text-lg text-primary">Availability:</strong>{" "}
          <span className="text-lg text-secondary"> partner.availability</span>
        </div>
        <div>
          <strong className="text-lg text-primary">Location:</strong>{" "}
          <span className="text-lg text-secondary"> partner.location</span>
        </div>
        <div>
          <strong className="text-lg text-primary">Experience Level:</strong>{" "}
          <span className="text-lg text-secondary">
            partner.experienceLevel
          </span>
        </div>
        <div>
          <strong className="text-lg text-primary">Partner Count:</strong>{" "}
          <span className="text-lg text-secondary"> partnerCount</span>
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
