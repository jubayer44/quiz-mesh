import React, { useContext } from "react";
import { TopicsContext } from "../../Layout/Main";
import Topic from "../Topic/Topic";

const Topics = () => {
  const allData = useContext(TopicsContext);
  const { data } = allData[0];

  return (
    <div>
      <h1 className="text-center text-2xl font-bold font-sans mb-3 text-violet-600 mt-10">
        Choose Your Topic And Answer Question
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 lg:px-5">
        {data.map((question) => (
          <Topic key={question.id} data={question} />
        ))}
      </div>
    </div>
  );
};

export default Topics;
