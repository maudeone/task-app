import React from "react";

const Overview = (props) => {
  const { tasks } = props;

  return (
    <ul>
      {tasks.map((task, count) => {
        return <li key={task.id}>{count}{task.text}</li>;
      })}
    </ul>
  );
};

export default Overview;
