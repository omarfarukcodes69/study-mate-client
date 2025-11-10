import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const MyConnection = () => {
  const { user } = use(AuthContext);
  const [connections, setConnections] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [updatedInfo, setUpdatedInfo] = useState({
    subject: "",
    studyMode: "",
  });
  // console.log(user)
  // Load all connections by user email
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/my-connections?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setConnections(data))
        .catch(() => toast.error("Failed to load connections"));
    }
  }, [user?.email]);
  console.log(connections);
  // Handle delete connection
  const handleDelete = async (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/bids/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              //   Optionally update UI:
            //   setConnections((prev) => prev.filter((bid) => bid._id !== _id));
            } else {
              toast.error("Delete failed — no matching bid found!");
            }
          });
        // console.log("Delete Bids");
      }
    });

    // console.log(bidId)

    // const confirm = window.confirm(
    //   "Are you sure you want to delete this connection?"
    // );
    // if (!confirm) return;

    // const res = await fetch(`http://localhost:3000/my-connections/${_id}`, {
    //   method: "DELETE",
    // });
    // const data = await res.json();

    // if (data.success) {
    //   setConnections(connections.filter((conn) => conn._id !== id));
    //   toast.success("Connection deleted successfully!");
    // } else {
    //   toast.error("Failed to delete connection.");
    // }
  };

  //  Handle update connectors
  const handleUpdate = async (id) => {
    const res = await fetch(`http://localhost:3000/my-connections/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedInfo),
    });

    const data = await res.json();
    if (data.success) {
      toast.success("Connection updated successfully!");
      setEditingId(null);
      // reload data
      fetch(`http://localhost:3000/my-connections?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setConnections(data));
    } else {
      toast.error("Update failed!");
    }
  };

  return (
    <div className="container mx-auto ">
      <h1 className="text-3xl text-base-200 bg-primary w-fit mx-auto p-4  font-bold text-center rounded-b-2xl shadow-xl">
        Create Partner Profile
      </h1>
      <span className="divider"></span>

      {connections.length === 0 ? (
        <p className="text-center text-accent">No connections found.</p>
      ) : (
        <div className="overflow-x-auto my-10">
          <table className="table w-full ">
            <thead className="bg-primary-content text-white">
              <tr className="text-center">
                <th>Profile</th>
                <th>Partner Name</th>
                <th>Subject</th>
                <th>Study Mode</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {connections.map((conn) => (
                <tr
                  key={conn._id}
                  className="hover:bg-blue-100 hover:text-black text-xl shadow rounded-2xl m-2 text-center  "
                >
                  <td>
                    <img
                      src={conn.partnerImg}
                      alt={conn.partnerName}
                      className="w-12 h-12 rounded-full object-cover border-1     border-primary mx-auto"
                    />
                  </td>
                  <td className="font-semibold">{conn.partnerName}</td>
                  <td className="font-semibold">{conn.partnerSubject}</td>
                  <td className="font-semibold">{conn.partnerStudyMode}</td>
                  <td>
                    <button
                      className="btn btn-success btn-sm mr-2"
                      onClick={() => handleUpdate(conn._id)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-error btn-sm"
                      onClick={() => setEditingId(null)}
                    >
                      Delete
                    </button>
                  </td>
                  {/* Update Mode */}
                  {/* {editingId === conn._id ? (
                    <>
                      <td>
                        <input
                          type="text"
                          value={updatedInfo.subject}
                          onChange={(e) =>
                            setUpdatedInfo({
                              ...updatedInfo,
                              subject: e.target.value,
                            })
                          }
                          className="input input-bordered input-sm"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={updatedInfo.studyMode}
                          onChange={(e) =>
                            setUpdatedInfo({
                              ...updatedInfo,
                              studyMode: e.target.value,
                            })
                          }
                          className="input input-bordered input-sm"
                        />
                      </td>
                    </>
                  ) : (
                    <>
                      <td>{conn.subject}</td>
                      <td>{conn.studyMode}</td>
                      <td>
                        <button
                          className="btn btn-warning btn-sm mr-2"
                          onClick={() => {
                            setEditingId(conn._id);
                            setUpdatedInfo({
                              subject: conn.subject,
                              studyMode: conn.studyMode,
                            });
                          }}
                        >
                          Update
                        </button>
                        <button
                          className="btn btn-error btn-sm"
                          onClick={() => handleDelete(conn._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </>
                  )} */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyConnection;
