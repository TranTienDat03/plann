import axios from "axios";

const baseUrl = "http://localhost:5000"; // Nếu bị chặn thì dùng "http://127.0.0.1:5000/"

/** 
 * Lấy tất cả công việc 
 */
const getAllToDo = async () => {
    try {
        const response = await axios.get(`${baseUrl}/todos`,{withCredentials: true});
        console.log("data --->", response.data);
        return response.data; // Chỉ trả về dữ liệu, không set state ở đây
    } catch (error) {
        console.error("Lỗi khi lấy danh sách công việc:", error);
        return [];
    }
};

/** 
 * Thêm công việc mới 
 */
const addToDo = async (text) => {
    try {
        const response = await axios.post(`${baseUrl}/todos`, { text },{
            withCredentials: true
        });
        return response.data; // Trả về dữ liệu mới
    } catch (error) {
        console.error("Lỗi khi thêm công việc:", error);
        throw error;
    }
};

/** 
 * Cập nhật công việc 
 */
const updateToDo = async (toDoId, text) => {
    try {
        const response = await axios.put(`${baseUrl}/todos/${toDoId}`, { text });
        return response.data;
    } catch (error) {
        console.error("Lỗi khi cập nhật công việc:", error);
        throw error;
    }
};

/** 
 * Cập nhật trạng thái công việc (Hoàn thành / Chưa hoàn thành)
 */
const updateToDoStatus = async (id, status) => {
    try {
        const response = await axios.patch(`${baseUrl}/todos/${id}/status`, { status });
        return response.data;
    } catch (error) {
        console.error("Lỗi khi cập nhật trạng thái:", error);
        throw error;
    }
};

/** 
 * Xóa công việc 
 */
const deleteToDo = async (_id) => {
    try {
        await axios.delete(`${baseUrl}/todos/${_id}`);
        return true; // Xóa thành công
    } catch (error) {
        console.error("Lỗi khi xóa công việc:", error);
        throw error;
    }
};

/** 
 * Đăng ký người dùng 
 */
const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${baseUrl}/register`, userData, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error("Lỗi đăng ký:", error);
        throw error;
    }
};

/** 
 * Đăng nhập người dùng 
 */
const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${baseUrl}/login`, userData, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error("Lỗi đăng nhập:", error);
        throw error;
    }
};

/** 
 * Kiểm tra phiên đăng nhập 
 */
const checkSession = async () => {
    try {
        const response = await axios.get(`${baseUrl}/check-session`, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error("Lỗi kiểm tra phiên đăng nhập:", error);
        throw error;
    }
};

/** 
 * Đăng xuất người dùng 
 */
const logoutUser = async () => {
    try {
        await axios.post(`${baseUrl}/logout`, {}, { withCredentials: true });
    } catch (error) {
        console.error("Lỗi đăng xuất:", error);
        throw error;
    }
};
const getStats = async () => {
    try {
        const response = await axios.get(`${baseUrl}/todos/stats`, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error("Lỗi khi lấy thống kê:", error);
        throw error;
    }
};


export { 
    getAllToDo, 
    addToDo, 
    updateToDo, 
    deleteToDo, 
    registerUser, 
    loginUser, 
    checkSession, 
    logoutUser, 
    updateToDoStatus ,
    getStats
};
