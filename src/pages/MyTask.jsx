import React from "react";
import { Link } from "react-router-dom";
import plus from "../assets/fluent_add-24-filled.png";
import editIcon from "../assets/Vector-edit.png";
import deleteIcon from "../assets/delete.png";
import { useFetch } from "../hooks/useFetch";

const MyTask = ({ baseURL }) => {
  const test = useFetch(`${baseURL}`);

  const { data } = test;
  return (
    <div className="alltasks-con">
      <div className="my-tasks d-flex">
        <h2 className="m-0">My Tasks</h2>
        <Link
          to="/new"
          className="d-flex justify-content-between align-items-center"
        >
          <img src={plus} alt="" />
          <p className="m-0">Add New Task</p>
        </Link>
      </div>
      {/* ===================== */}

      {data
        ? data.map((Task) => {
            const { title, description, tag, _id } = Task;


            const tagColor = tag.toLowerCas === "Urgent" ? "#f38383" : "#73C"
            return ( 

              <div className="task-content" key={id}>
                <div className="inner-tak d-flex justify-content-between align-items-end">
                  <p className="m-0" style={{color: tagColor}}> {tag}</p>
                  <div className="tasks-but d-flex gap-4">
                    <Link
                      to="/edit"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <img src={editIcon} alt="" />
                      <p>Edit</p>
                    </Link>
                    <button className="d-flex align-items-center justify-content-center">
                      <img src={deleteIcon} alt="" />
                      <p className="m-0">Delete</p>
                    </button>
                  </div>
                </div>

                <hr />

                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
            );
          })
        : null}

      <div className="my-5 bk-top">
        <a href="#">Back To Top</a>
      </div>
    </div>
  );
};

export default MyTask;
