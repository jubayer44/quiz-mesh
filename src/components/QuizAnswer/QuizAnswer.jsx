import React from "react";

const QuizAnswer = ({ handleAnswer, option }) => {
  return (
    <div value={option} className="bg-cyan-300 p-4 text-[18px] text-gray-800 my-5 rounded-lg hover:bg-cyan-400">
      <input
        style={{ height: "20px", width: "20px", verticalAlign: "middle" }}
        onClick={() => handleAnswer(option)}
        className="cursor-pointer"
        type="radio"
        name="drone"
        id={option}
        value={option}
      />
      <label className="font-semibold ml-2 cursor-pointer " htmlFor={option}>
        {option}
      </label>
    </div>
  );
};

export default QuizAnswer;
