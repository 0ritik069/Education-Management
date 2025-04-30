import React from "react";
import Layout from "../../components/Layout";

const AssignedClasses = () => {
  // Dummy data for now
  const assignedClasses = [
    {
      id: 1,
      className: "Math - Grade 8",
      schedule: "Mon, Wed, Fri - 10:00 AM to 11:00 AM",
      room: "Room 101",
    },
    {
      id: 2,
      className: "Science - Grade 9",
      schedule: "Tue, Thu - 1:00 PM to 2:30 PM",
      room: "Room 202",
    },
  ];

  return (
    <Layout>
      <div className="innerContent">
        <div className="container">
          <h1 className="text-2xl font-bold mb-4">Assigned Classes</h1>
          <div className="bg-white rounded-xl shadow-md p-4">
            {assignedClasses.map((item) => (
              <div
                key={item.id}
                className="border-b py-3 last:border-b-0"
              >
                <h2 className="text-lg font-semibold">{item.className}</h2>
                <p className="text-sm text-gray-600">{item.schedule}</p>
                <p className="text-sm text-gray-600">Room: {item.room}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AssignedClasses;
