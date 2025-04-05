const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,  // Sửa lỗi "require" thành "required"
  },
  status: {
    type: String,
    enum: ["Đang thực hiện", "Hoàn thành", "Quan trọng"], // Giới hạn các trạng thái hợp lệ
    default: "Đang thực hiện"
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
  
});

module.exports = mongoose.model('ToDo', todoSchema);
