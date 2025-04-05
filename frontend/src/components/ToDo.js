import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const ToDo = ({ text, updateMode, deleteToDo, toggleStatus, status }) => {
  return (
    <div className={`todo ${status === "Hoàn thành" ? "completed" : status === "Quan trọng" ? "important" : ""}`}>
      <div className="text">{text}</div>

      <div className="icons">
        {/* Đang thực hiện: Có cả ✅ và ! */}
        {status === "Đang thực hiện" && (
          <>
            <FaCheckCircle className="icon" onClick={() => toggleStatus("Hoàn thành")} />
            <FaExclamationCircle className="icon" onClick={() => toggleStatus("Quan trọng")} />
            <BiEdit className="icon" onClick={updateMode} />
          </>
        )}

        {/* Quan trọng: Chỉ có ✅ */}
        {status === "Quan trọng" && (
          <>
            <FaCheckCircle className="icon" onClick={() => toggleStatus("Hoàn thành")} />
            <BiEdit className="icon" onClick={updateMode} />
          </>
        )}

        {/* Hoàn thành: Chỉ có xóa */}
        <AiFillDelete className="icon" onClick={deleteToDo} />
      </div>
      
    </div>
  );
};

export default ToDo;
