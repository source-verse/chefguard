import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { app } from "../firebase";
import { getDocs, getFirestore, collection } from "firebase/firestore";

const fetchEmployee = async () => {
  const db = getFirestore(app);
  const emp = await getDocs(collection(db, "employees"));
  //   const emp = await addDocs(collection(db, "employees"));

  const employeeList = emp.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return { employeeList };
};

function Employee() {
  const params = useParams();
  const [employee, setemployee] = useState({});

  useEffect(() => {
    fetchEmployee().then(({ employeeList }) => {
      setemployee(employeeList.find((item) => params.id == item.id));
      console.log(employee);
    });
  }, [params.id]);

  return (
    employee && (
      <>
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-md w-96">
            <div className="flex flex-col items-center mb-6">
              <img
                src={employee.image}
                alt="Employee Avatar"
                className="w-20 h-20 rounded mb-4 shadow-md"
              />
              <h1 className="text-2xl font-extrabold text-gray-800">
                {employee.name}
              </h1>
              <p className="text-sm text-gray-600">{employee.designation}</p>
            </div>
            <div className="mb-4">
              <label className="text-sm text-gray-600">Employee id</label>
              <p className="text-gray-800 font-semibold">
                {employee.employeeId}
              </p>
            </div>
            <div className="mb-4">
              <label className="text-sm text-gray-600">Department</label>
              <p className="text-gray-800 font-semibold">{employee.dept}</p>
            </div>
            <div className="mb-4">
              <label className="text-sm text-gray-600">Email</label>
              <p className="text-blue-600 font-semibold hover:underline transition duration-300 ease-in-out">
                {employee.email}
              </p>
            </div>
            <div className="mb-6">
              <label className="text-sm text-gray-600">Phone Number</label>
              <p className="text-gray-800 font-semibold">{employee.phone}</p>
            </div>
            <div className="mb-6">
              <label className="text-sm text-gray-600">Address</label>
              <p className="text-gray-800 font-semibold">{employee.address}</p>
            </div>
            <div className="border-t"></div>
          </div>
        </div>
      </>
    )
  );
}

export default Employee;
