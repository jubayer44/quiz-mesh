import React from "react";
import Icon from "react-hero-icon";
import { useNavigate } from "react-router-dom";

const Topic = ({ data }) => {
  const { name, logo, total, id } = data;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/quiz/${id}`);
  };

  return (
    <div className=" mx-auto p-4 shadow-lg my-4 rounded-lg">
      <div className=" sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
          <a href="/" aria-label="Article">
            <img
              src={logo}
              className="object-cover w-full rounded bg-black h-[380px]"
              alt=""
            />
          </a>
          <div className="py-5 text-center">
            <p className="text-2xl font-bold leading-5 ">{name}</p>
            <p className="mt-2 font-bold">
              <small>Total Question: {total}</small>
            </p>
            <button
              onClick={handleNavigate}
              className="bg-purple-700 p-3 rounded text-white font-bold mt-3 w-full flex justify-center hover:bg-purple-900"
            >
              Start Here
              <Icon className="ml-2" icon="arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic;
