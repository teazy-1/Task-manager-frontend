import React, { useState } from "react";
import downArr from "../assets/Vector-arrowdown.png";

const DropDown = () => {
  const [tag, seTag] = useState("urgent");
  const [options, setOptions] = useState(["urgent", "Important"]);
  const [selected, setSelected] = useState("urgent");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="tag-edit-new position-relative rounded-2 d-flex justify-content-between align-items-center py-4 px-5">
      <h3 className="position-absolute">Tags</h3>

      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="d-flex align-items-center gap-5"
      >
        <div className="d-flex align-items-center gap-5">
          <p className="m-0 py-1 px-2 rounded-1">{selected}</p>
        </div>
        <img src={downArr} alt="" />
      </div>
      <ul className="position-absolute mt-5 bg-secondary w-100 me-5 list-unstyled start-0 rounded-2 p-4 text-white">
        {isOpen
          ? options.map(() => {
              <li
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                  setTag(option);
                }}
                key={option}
                className="p-1"
                style={{ cursor: "pointer" }}
              >
                {option}{" "}
              </li>;
            })
          : null}
      </ul>
    </div>
  );
};

export default DropDown;
