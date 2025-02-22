"use client";
import { useState } from "react";
import Public from "./Public";
import Private from "./Private";
import Mycardpage from "./Mycardpage";
const VotingPanel = () => {
  const [isParticipationActive, setIsParticipationActive] = useState(true);
  const [selectedOption, setSelectedOption] = useState("public");

  const toggleTab = () => {
    setIsParticipationActive((prev) => !prev);
  };

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      {/* Tabs Section */}
      <section className="flex border-b-2 border-b-gray-300 w-full items-center justify-start space-x-4">
        <button
          className={`p-2 border-b-4 ${
            isParticipationActive
              ? "font-bold border-b-green-600"
              : "border-b-transparent"
          }`}
          onClick={toggleTab}
          aria-selected={isParticipationActive}
        >
          My participation
        </button>
        <button
          className={`p-2 border-b-4 ${
            !isParticipationActive
              ? "font-bold border-b-green-600"
              : "border-b-transparent"
          }`}
          onClick={toggleTab}
          aria-selected={!isParticipationActive}
        >
          My Card
        </button>
      </section>

      {isParticipationActive && (
        <select
          className="bg-white p-3 rounded-lg m-2"
          value={selectedOption}
          onChange={handleDropdownChange}
        >
          <option value="public">Public</option>
          <option value="private">Private</option>
        </select>
      )}

      {isParticipationActive ? (
        <section className="flex flex-col items-center justify-center">
          {selectedOption === "public" ? <Public /> : <Private />}
        </section>
      ) : (
        <section className="flex flex-col items-center justify-center">
          <Mycardpage />
        </section>
      )}
    </div>
  );
};

export default VotingPanel;
