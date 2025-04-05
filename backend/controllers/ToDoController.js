const ToDoModel = require("../models/ToDoModel");

// Lấy danh sách kế hoạch
module.exports.getToDo = async (req, res) => {
    try {
        const userId = req.session.userId;
        const toDo = await ToDoModel.find({userId});
        res.json(toDo);
    } catch (error) {
        res.status(500).json({ error: "Lỗi khi lấy dữ liệu" });
    }
};

// Thêm mới kế hoạch
module.exports.saveToDo = async (req, res) => {
    try {
        const { text, status } = req.body;
        const userId = req.session.userId;
        console.log(userId)
        const newToDo = await ToDoModel.create({ text, status: status || "Đang thực hiện", userId });

        console.log("Added Successfully...");
        res.json(newToDo);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Lỗi khi thêm kế hoạch" });
    }
};

// Cập nhật nội dung kế hoạch
module.exports.updateToDo = async (req, res) => {
    try {
        const { todoId } = req.params;
        const { text } = req.body;

        const updatedToDo = await ToDoModel.findByIdAndUpdate(todoId, { text }, { new: true });

        if (!updatedToDo) {
            return res.status(404).json({ error: "Không tìm thấy kế hoạch" });
        }

        res.json(updatedToDo);
    } catch (error) {
        res.status(500).json({ error: "Lỗi khi cập nhật kế hoạch" });
    }
};

// Cập nhật trạng thái kế hoạch
module.exports.updateToDoStatus = async (req, res) => {
    try {
        const { todoId } = req.params;
        const { status } = req.body;

        if (!["Đang thực hiện", "Hoàn thành", "Quan trọng"].includes(status)) {
            return res.status(400).json({ error: "Trạng thái không hợp lệ" });
        }

        const updatedToDo = await ToDoModel.findByIdAndUpdate(todoId, { status }, { new: true });

        if (!updatedToDo) {
            return res.status(404).json({ error: "Không tìm thấy kế hoạch" });
        }

        res.json(updatedToDo);
    } catch (error) {
        res.status(500).json({ error: "Lỗi khi cập nhật trạng thái" });
    }
};

// Xóa kế hoạch
module.exports.deleteToDo = async (req, res) => {
    try {
        const { todoId } = req.params;

        const deletedToDo = await ToDoModel.findByIdAndDelete(todoId);

        if (!deletedToDo) {
            return res.status(404).json({ error: "Không tìm thấy kế hoạch" });
        }

        res.json({ message: "Xóa thành công" });
    } catch (error) {
        res.status(500).json({ error: "Lỗi khi xóa kế hoạch" });
    }
};
// Lấy thống kê kế hoạch
module.exports.getStats = async (req, res) => {
    try {
        const userId = req.session.userId;

        // Lấy tổng số kế hoạch
        const totalPlans = await ToDoModel.countDocuments({ userId });

        // Lấy số kế hoạch đã hoàn thành
        const completedPlans = await ToDoModel.countDocuments({ userId, status: "Hoàn thành" });

        // Lấy số kế hoạch đang thực hiện
        const inProgressPlans = await ToDoModel.countDocuments({ userId, status: "Đang thực hiện" });

        // Lấy số kế hoạch quan trọng
        const importantPlans = await ToDoModel.countDocuments({ userId, status: "Quan trọng" });

        res.status(200).json({
            totalPlans,
            completedPlans,
            inProgressPlans,
            importantPlans
        });
    } catch (error) {
        res.status(500).json({ error: "Lỗi khi lấy thống kê" });
    }
};