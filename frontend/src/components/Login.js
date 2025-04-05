import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const login = useAuth()?.login;


  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const username=form.get("username");
    const password=form.get("password");

    const res = await fetch('http://localhost:5000/login', {
      method: 'POST',
      credentials: "include",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          username: username,
          password: password
      })
    });
    if(res.ok) {
      const data = await res.json();
      console.log(data)
      login({
        user: null,
        isLogin: data?.user ? true :false
      })
      navigate('/home')
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Đăng Nhập</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 mb-3 border rounded"
            value={email}
            name="username"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            className="w-full p-2 mb-3 border rounded"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            Đăng Nhập
          </button>
        </form>
        <p className="mt-4 text-center">
          Chưa có tài khoản?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Đăng ký ngay
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
