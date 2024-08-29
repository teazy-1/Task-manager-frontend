import React from "react";
import backArr from "../assets/arrow-back.png";
import { Link } from "react-router-dom";
import DropDown from "../components/DropDown";

const EditTask = () => {
  return (
    <div className="editt-con text-start">
      <div className="back-to2 d-flex align-items-center gap-4">
        <Link to="/tasks">
          <img src={backArr} alt="" />
        </Link>
        <h2 className="m-0">Edit Task</h2>
      </div>

      {/* ================= */}
      <form action="" className="editt-form">
        <div className="title-new position-relative">
          <label className="position-absolute" htmlFor="">
            Task Title
          </label>
          <input
            className="w-100 py-4 px-5 rounded-2"
            type="text"
            placeholder="E.g Project Defense, Assignment..."
          />
        </div>

        {/* ===================== */}
        <div className="describe-edit-new position-relative">
          <label className="position-absolute" htmlFor="">
            Description
          </label>
          <textarea
            className="w-100 py-4 px-5 rounded-2"
            name=""
            id=""
            cols="30"
            rows="7"
            placeholder="Breifly Describe Your Task..."
          ></textarea>
        </div>

        {/* ========================= */}
        <DropDown />
        {/* =========================== */}

        <button className="but-edit-new">Done</button>
      </form>

      {/* ========= */}
      <div className="my-5 bk-top text-center">
        <a href="#">Back To The Top</a>
      </div>
    </div>
  );
};

export default EditTask;
