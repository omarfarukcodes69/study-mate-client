import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";

const ConnUpdateModal = ({ id }) => {
  console.log(id);
  //   const [subject, setSubject] = useState(connection?.partnerSubject || "");
  //   const [studyMode, setStudyMode] = useState(
  //     connection?.partnerStudyMode || ""
  //   );
  //   const { studyMode, subject } = { studyMode, subject };
  //   useEffect(() => {
  //     fetch(`http://localhost:3000/connections/${id}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         // setSubject(data.partnerSubject || "");
  //         // setStudyMode(data.partnerStudyMode || "");
  //       })
  //       .catch(() => toast.error("Failed to load connection data"));
  //   }, [id]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const subject = form.subject.value;
    const studyMode = form.studyMode.value;
    console.log({ subject, studyMode });
    const updatePartner = {
      subject,
      studyMode,
    };
   e.preventDefault();
    const updatePartner = { subject, studyMode };

    fetch(`http://localhost:3000/connections/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatePartner),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Updated Successfully!");
        document.getElementById("my_modal_5").close();
      })
      .catch(() => toast.error("Update failed!"));
  return (
    <div>
      {/* Open the modal using document.getElementById('my_modal_5').showModal() */}
      <dialog
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle border border-primary"
      >
        <div className="modal-box bg-blue-100 p-0 borde">
          <h2 className="text-xl text-base-200 bg-primary w-fit mx-auto p-4 font-bold text-center rounded-b-2xl shadow-xl">
            Update Connection
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 p-10">
            <div>
              <label className="block text-lg font-medium text-primary ">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                // value="{subject}"
                className="input input-bordered w-full text-primary"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-primary ">
                Study Mode
              </label>
              <input
                type="text"
                // value="{studyMode}"
                name="studyMode"
                className="input input-bordered w-full  text-primary"
                required
              />
            </div>
            <div className="modal-action">
              <button type="submit" className="btn btn-primary">
                Update
              </button>
              <button
                type="button"
                className="btn btn-error"
                onClick={() => document.getElementById("my_modal_5").close()}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ConnUpdateModal;
