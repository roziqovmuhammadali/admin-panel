import React, { useState } from "react";

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex items-center justify-center bg-[#DCE9F9]">
      <div className="fixed  left-0 top-0 flex h-full w-32 flex-col justify-between bg-gray-800">
        <div className="mt-4 flex flex-col items-center bg-[#F1F4F8]">
          <button
            className={`mb-4 text-lg text-white ${selectedOption === "option1" ? "bg-blue-500" : ""}`}
            onClick={() => handleOptionClick("option1")}
          >
            Option 1
          </button>
          <button
            className={`mb-4 text-lg text-white ${selectedOption === "option2" ? "bg-blue-500" : ""}`}
            onClick={() => handleOptionClick("option2")}
          >
            Option 2
          </button>
          <button
            className={`mb-4 text-lg text-white ${selectedOption === "option3" ? "bg-blue-500" : ""}`}
            onClick={() => handleOptionClick("option3")}
          >
            Option 3
          </button>
          <button
            className={`mb-4 text-lg text-white ${selectedOption === "option4" ? "bg-blue-500" : ""}`}
            onClick={() => handleOptionClick("option4")}
          >
            Option 4
          </button>
        </div>
        <div className="mb-4 flex flex-col items-center">
          <button className="text-lg text-white">Settings</button>
          <button className="text-lg text-white">Logout</button>
        </div>
      </div>
      <div className="flex h-[200px] w-[600px] items-center justify-center ">
        {selectedOption && (
          <div className=" text-blue to-blue-600 p-4">
            <p>You selected: {selectedOption}</p>
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
