import React, { useEffect, useState } from "react";
import backArr from "../assets/arrow-back.png";
import { Link, useNavigate } from "react-router-dom";
import DropDown from "../components/DropDown";

const NewTask = ({ BaseURL }) => {
  const [title, setTitle] = useEffect("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const [sending, setSending] = useState(false);

const nav = useNavigate()

  const handleSubmit = (event) => {
    setSending(true);
    event.preventDefault();

    const formData = {
      title,
      description,
      tag,
    };
    
    const newData = {
      method: "POST",
      headers:{
        "content-Type" : "application/json",
      },
      body: JSON.stringify(formData)
    };
    const res = fetch (`${BaseURL}/api/task/create`, newData);

    const data = res.json()

    setSending(false)

    nav("tasks");
  };
  return (
    <div className="newt-con text-start">
      <div className="back-to1 d-flex align-items-center gap-4">
        <Link to="/tasks">
          <img src={backArr} alt="" />
        </Link>
        <h2 className="m-0">New Task</h2>
      </div>

      {/* ================= */}
      <form onSubmit={handleSubmit} action="" className="newt-form">
        <div className="title-new position-relative">
          <label className="position-absolute" htmlFor="">
            Task Title
          </label>
          <input
            onChange={(event) => {
setTitle(event.target.value)
            }} className="w-100 py-4 px-5 rounded-2"
            type="text"
            placeholder="E.g Project Defense, Assignment..."
          />
        </div>

        {/* ===================== */}
        <div className="describe-new position-relative">
          <label className="position-absolute" htmlFor="">
            Description
          </label>
          <textarea
            onChange={() => {
              setDescription(event.target.value)
            }} className="w-100 py-4 px-5 rounded-2"
            name=""
            id=""
            cols="30"
            rows="7"
            placeholder="Breifly Describe Your Task..."
          ></textarea>
        </div>
        {/* ================== */}

        <DropDown setTag={setTag}

        
        <div className="tag-new position-relative rounded-2 d-flex justify-content-between align-items-center py-4 px-5">
          <h3 className="position-absolute">Tags</h3>
          <div className="d-flex align-items-center gap-5">
            <p className="m-0 py-1 px-2 rounded-1">Urgent</p>
            <p className="m-0 py-1 px-2 rounded-1">Important</p>
          </div>
          <img src={downArr} alt="" />
        </div>
        {/* =========================== */}

        <button disabled={sending} className="but-new mt-4">Done</button>
      </form>

      {/* ========= */}
      <div className="my-5 bk-top text-center">
        <a href="#">Back To Top</a>
      </div>
    </div>
  );
};

export default NewTask;
