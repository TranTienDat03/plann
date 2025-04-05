import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";


const Register = () => {
  const { register } = useAuth(); // Lấy hàm register từ context
  const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Đăng ký với:", name, password); // ✅ Chỉ gửi `name` và `password`
  
    try {
      const result = await register({ name, password }); // ✅ Gửi đúng format  

      if (result && result.isLogin) {
        navigate("/home"); // Chuyển hướng nếu đăng ký thành công
      } else {
        setError("Đăng ký thất bại!"); // Hiển thị lỗi nếu thất bại
      }
    } catch (error) {
      console.error("Lỗi khi đăng ký:", error);
      setError("Đăng ký thất bại! Vui lòng thử lại.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Đăng Ký</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Tên của bạn"
            className="w-full p-2 mb-3 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/* <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-3 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /> */}
          <input
            type="password"
            placeholder="Mật khẩu"
            className="w-full p-2 mb-3 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">
            Đăng Ký
          </button>
        </form>
        <p className="mt-4 text-center">
          Đã có tài khoản?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Đăng Nhập
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
