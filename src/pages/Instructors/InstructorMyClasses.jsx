import React from "react";
import Layout from "../../components/Layout";

const classes = [
  {
    id: 1,
    name: "Math 101",
    time: "Monday, Wednesday, Friday - 9:00 AM to 10:30 AM",
    room: "Room 305",
  },
  {
    id: 2,
    name: "English Literature",
    time: "Tuesday, Thursday - 11:00 AM to 12:30 PM",
    room: "Room 201",
  },
  {
    id: 3,
    name: "Physics 202",
    time: "Monday, Wednesday - 1:00 PM to 2:30 PM",
    room: "Room 402",
  },
];

const InstructorMyClasses = () => {
  return (
    <Layout>
      <div className="innerContent">
        <div className="container max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">My Classes</h1>

          {classes.map((classItem) => (
            <div
              key={classItem.id}
              className="bg-white border-l-4 border-green-500 p-4 mb-4 rounded-lg shadow-sm"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-800">{classItem.name}</h2>
                <span className="text-sm text-gray-400">{classItem.room}</span>
              </div>
              <p className="text-gray-700 mt-2">{classItem.time}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default InstructorMyClasses;
