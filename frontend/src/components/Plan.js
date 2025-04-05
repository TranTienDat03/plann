import { useEffect, useState } from "react";
import { addToDo, getAllToDo, updateToDo, deleteToDo, updateToDoStatus } from "../utils/HandleApi";
import ToDo from "./ToDo";

export default function Plan() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState(null);

  // Lấy danh sách kế hoạch khi component mount
  useEffect(() => {
    fetchToDos();
  }, []);

  // Hàm lấy danh sách kế hoạch
  const fetchToDos = async () => {
    try {
      const data = await getAllToDo();
      setToDo(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Lỗi khi tải danh sách kế hoạch:", error);
      setToDo([]);
    }
  };

  // Thêm kế hoạch mới
  const handleAdd = async () => {
    if (text.trim()) {
      await addToDo(text);
      setText("");
      fetchToDos();
    }
  };

  // Cập nhật kế hoạch
  const handleUpdate = async () => {
    if (text.trim() && toDoId) {
      await updateToDo(toDoId, text);
      setText("");
      setIsUpdating(false);
      setToDoId(null);
      fetchToDos();
    }
  };

  // Cập nhật trạng thái (Đang thực hiện ↔ Hoàn thành ↔ Quan trọng)
  const toggleStatus = async (id, nextState) => {
    // let newStatus;
  
    // if (currentStatus === "Đang thực hiện") {
    //   newStatus = "Quan trọng";
    // } else if (currentStatus === "Quan trọng") {
    //   newStatus = "Hoàn thành";
    // } else if (currentStatus !== "Hoàn thành") {
    //   newStatus = "Hoàn thành";
    // } else {
    //   return; // Không thay đổi nếu đã hoàn thành
    // }
  
    await updateToDoStatus(id, nextState);
    fetchToDos();
  };
    
  

  

  // Chuyển sang chế độ cập nhật
  const updateMode = (id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(id);
  };

  // Xóa kế hoạch
  const handleDelete = async (id) => {
    await deleteToDo(id);
    fetchToDos();
  };

  // Phân loại kế hoạch theo trạng thái
  const importantTasks = toDo.filter(item => item.status === "Quan trọng");
  const ongoingTasks = toDo.filter(item => item.status === "Đang thực hiện");
  const completedTasks = toDo.filter(item => item.status === "Hoàn thành");

  return (
    <div className="container">
      <h1>Kế Hoạch Cá Nhân</h1>
  
      <div className="top">
        <input 
          type="text"
          placeholder="Nhập kế hoạch của bạn..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button 
          className="add"
          onClick={isUpdating ? handleUpdate : handleAdd}
        >
          {isUpdating ? "Cập nhật" : "Thêm"}
        </button>
      </div>
  
      {/* Danh sách kế hoạch */}
      <div className="list">
        {toDo.length === 0 ? ( 
          <p className="empty-message">Không có kế hoạch nào</p>
        ) : (
          <>
            {/* Công việc Quan trọng */}
            {importantTasks.length > 0 && (
              <>
                <h3>🔥 Quan trọng</h3>
                {importantTasks.map((item) => (
                  <ToDo 
                    key={item._id} 
                    text={item.text}
                    updateMode={() => updateMode(item._id, item.text)}
                    deleteToDo={() => handleDelete(item._id)}
                    toggleStatus={(nextState) => toggleStatus(item._id, nextState)}
                    status={item.status}
                  />
                ))}
              </>
            )}
  
            {/* Công việc Đang thực hiện */}
            {ongoingTasks.length > 0 && (
              <>
                <h3>📌 Đang thực hiện</h3>
                {ongoingTasks.map((item) => (
                  <ToDo 
                    key={item._id} 
                    text={item.text}
                    updateMode={() => updateMode(item._id, item.text)}
                    deleteToDo={() => handleDelete(item._id)}
                    toggleStatus={(nextState) => toggleStatus(item._id, nextState)}
                    status={item.status}
                  />
                ))}
              </>
            )}
  
            {/* Công việc Hoàn thành */}
            {completedTasks.length > 0 && (
              <>
                <h3>✅ Hoàn thành</h3>
                {completedTasks.map((item) => (
                  <ToDo 
                    key={item._id} 
                    text={item.text}
                    updateMode={() => updateMode(item._id, item.text)}
                    deleteToDo={() => handleDelete(item._id)}
                    toggleStatus={(nextState) => toggleStatus(item._id, nextState)}
                    status={item.status}
                  />
                ))}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
  
}
