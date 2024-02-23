import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Li from "./li";
const Ul = ({ item, index, toggleGroup, expandedGroup, setIt }) => {
  return (
    <ul>
      <button onClick={() => toggleGroup(index)}>
        <span className="title">
          <FontAwesomeIcon icon={item.img} className="icon" />
          {item.name}
        </span>
        <p>
          {expandedGroup === index &&
            item.options.map((option, optionIndex) => (
              <Li key={option} option={option} setIt={setIt} />
            ))}
        </p>
      </button>
    </ul>
  );
};

export default Ul;
