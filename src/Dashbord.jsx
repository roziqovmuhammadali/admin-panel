import React, { useState } from "react";
import LoginForm from "./LoginPages/LoginForm";
import DataTable from "./components/DataTable";
import { LuShoppingCart } from "react-icons/lu";
import {
  MdOutlinePeople,
  MdRadioButtonChecked,
  MdInsertChartOutlined,
} from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import Avatar from "@mui/material/Avatar";
import { IoSettingsSharp } from "react-icons/io5";

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex items-center justify-center bg-[#DCE9F9]">
      <div className="fixed left-0 top-0 flex h-full w-14  flex-col items-center justify-between bg-gray-800 p-5">
        <div className="mt-4 flex w-10 flex-col items-center rounded-lg bg-[#717377] p-3">
          <button
            className={`mb-4 text-lg text-white ${selectedOption === "DataTable" ? "text-blue-500" : ""}`}
            onClick={() => handleOptionClick("DataTable")}
          >
            <LuShoppingCart />
          </button>
          <button
            className={`mb-4 text-lg text-white ${selectedOption === "option2" ? "text-blue-700" : ""}`}
            onClick={() => handleOptionClick("option2")}
          >
            <MdOutlinePeople />
          </button>
          <button
            className={`mb-4 text-lg text-white ${selectedOption === "option3" ? "text-blue-500" : ""}`}
            onClick={() => handleOptionClick("option3")}
          >
            <MdRadioButtonChecked />
          </button>
          <button
            className={`mb-4 text-lg text-white ${selectedOption === "LoginForm" ? "text-blue-500" : ""}`}
            onClick={() => handleOptionClick("LoginForm")}
          >
            <MdInsertChartOutlined />
          </button>
        </div>
        <div className="mb-4 flex flex-col items-center gap-5">
          <button className="text-lg text-white">
            <IoIosNotifications />
          </button>
          <button className="text-lg text-white">
            <IoSettingsSharp />
          </button>
          <button className="text-lg text-white">
            <Avatar alt="Remy Sharp" src="/public/avatar.jpg" />
          </button>
        </div>
      </div>
      <div className="flex w-[90%] items-center justify-center">
        {selectedOption && (
          <div className="w-full">
            {selectedOption === "DataTable" && <DataTable />}
            {selectedOption === "LoginForm" && <LoginForm />}
            <button
              className="text-blue"
              onClick={() => setSelectedOption(null)}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
