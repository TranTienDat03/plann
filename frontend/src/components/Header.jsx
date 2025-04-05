// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import { useAuth } from "../context/authContext";
// import { useNavigate } from "react-router-dom";

// export default function Header() {
  
//   const [isOpen, setIsOpen] = useState(false);
//   const { auth, logout } = useAuth(); // Lấy thông tin đăng nhập và hàm logout
//   const navigate = useNavigate(); // ✅ Thêm useNavigate

//   const handleLogout = () => {
//     logout(); // Gọi hàm logout
//     navigate("/home"); // Điều hướng về trang chủ
//   };

//   return (
//     <header className="bg-white shadow-lg dark:bg-gray-900">
//       <div className="flex justify-between items-center px-6 md:px-12 py-4 md:py-6 w-full">
//         {/* Logo */}
//         <Link
//           to="/home"
//           className="text-3xl font-extrabold text-gray-900 dark:text-white"
//         >
//           🏠
//         </Link>

//         {/* Desktop Menu */}
//         <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-12 text-lg">
//           <Link
//             to="/home"
//             className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
//           >
//             Home
//           </Link>
//           <Link
//             to="/about"
//             className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
//           >
//             About
//           </Link>
//           <Link
//             to="/services"
//             className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
//           >
//             Services
//           </Link>
//           {auth.isLogin && (
//             <Link
//               to="/plan"
//               className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
//             >
//               Plan
//             </Link>
//           )}
//         </nav>

//         {/* Kiểm tra trạng thái đăng nhập */}
//         <div className="flex space-x-2">
//           {!auth.isLogin ? (
//             <>
//               <Link
//                 to="/register"
//                 className="hidden md:block px-4 py-3 bg-blue-500 text-white text-lg rounded-full hover:bg-blue-600 transition-all"
//               >
//                 Sign Up
//               </Link>
//               <Link
//                 to="/login"
//                 className="hidden md:block px-5 py-3 bg-blue-500 text-white text-lg rounded-full hover:bg-blue-600 transition-all"
//               >
//                 Login
//               </Link>
//             </>
//           ) : (
//             <button
//               onClick={handleLogout}
//               className="hidden md:block px-5 py-3 bg-red-500 text-white text-lg rounded-full hover:bg-red-600 transition-all"
//             >
//               Logout
//             </button>
//           )}
//         </div>

//         {/* Mobile Menu Button */}
//         <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <nav className="md:hidden bg-gray-100 dark:bg-gray-800 p-4 text-lg space-y-3">
//           <Link
//             to="/home"
//             className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500"
//           >
//             Home
//           </Link>
//           <Link
//             to="/about"
//             className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500"
//           >
//             About
//           </Link>
//           <Link
//             to="/services"
//             className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500"
//           >
//             Services
//           </Link>
//           {auth.isLogin && (
//             <Link
//               to="/plan"
//               className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500"
//             >
//               Plan
//             </Link>
//           )}

//           {/* Kiểm tra trạng thái đăng nhập */}
//           {!auth.isLogin ? (
//             <>
//               <Link
//                 to="/register"
//                 className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500"
//               >
//                 Sign Up
//               </Link>
//               <Link
//                 to="/login"
//                 className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500"
//               >
//                 Login
//               </Link>
//             </>
//           ) : (
//             <button
//               onClick={handleLogout}
//               className="block w-full text-left py-2 text-red-500 hover:text-red-600"
//             >
//               Logout
//             </button>
//           )}
//         </nav>
//       )}
//     </header>
//   );
// }


import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { auth, logout } = useAuth(); // Lấy thông tin đăng nhập và hàm logout
  const navigate = useNavigate(); // ✅ Thêm useNavigate

  const handleLogout = () => {
    logout(); // Gọi hàm logout
    navigate("/home"); // Điều hướng về trang chủ
  };

  return (
    <header className="bg-white shadow-lg dark:bg-gray-900">
      <div className="flex justify-between items-center px-6 md:px-12 py-4 md:py-6 w-full">
        {/* Logo */}
        <Link
          to="/home"
          className="text-3xl font-extrabold text-gray-900 dark:text-white"
        >
          🏠
        </Link>

        {/* Desktop Menu */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-12 text-lg">
          <Link
            to="/home"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
          >
            Services
          </Link>
          {auth.isLogin && (
            <>
              <Link
                to="/plan"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
              >
                Plan
              </Link>
              <Link
                to="/stats"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
              >
                Stats
              </Link>
            </>
          )}
        </nav>

        {/* Kiểm tra trạng thái đăng nhập */}
        <div className="flex space-x-2">
          {!auth.isLogin ? (
            <>
              <Link
                to="/register"
                className="hidden md:block px-4 py-3 bg-blue-500 text-white text-lg rounded-full hover:bg-blue-600 transition-all"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="hidden md:block px-5 py-3 bg-blue-500 text-white text-lg rounded-full hover:bg-blue-600 transition-all"
              >
                Login
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="hidden md:block px-5 py-3 bg-red-500 text-white text-lg rounded-full hover:bg-red-600 transition-all"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-gray-100 dark:bg-gray-800 p-4 text-lg space-y-3">
          <Link
            to="/home"
            className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500"
          >
            About
          </Link>
          <Link
            to="/services"
            className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500"
          >
            Services
          </Link>
          {auth.isLogin && (
            <>
              <Link
                to="/plan"
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500"
              >
                Plan
              </Link>
              <Link
                to="/stats"
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500"
              >
                Stats
              </Link>
            </>
          )}

          {/* Kiểm tra trạng thái đăng nhập */}
          {!auth.isLogin ? (
            <>
              <Link
                to="/register"
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500"
              >
                Login
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="block w-full text-left py-2 text-red-500 hover:text-red-600"
            >
              Logout
            </button>
          )}
        </nav>
      )}
    </header>
  );
}