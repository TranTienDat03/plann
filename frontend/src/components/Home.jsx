import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section
        className="relative w-full h-[60vh] min-h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://anhdepfree.com/wp-content/uploads/2018/08/hinh-nen-wallpaper-dep-cho-may-tinh.jpg')",
        }}
      >
        <div className="bg-black bg-opacity-60 p-6 sm:p-10 text-center rounded-xl max-w-2xl mx-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Chào mừng đến với Website của chúng tôi
          </h1>
          <p className="text-gray-100 mt-4 text-base sm:text-lg">
            Nơi cung cấp các kế hoạch giải pháp sáng tạo cho công việc và cuộc sống
          </p>
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300">
            Bắt đầu ngay
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Tại sao chọn chúng tôi?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-xl transition duration-300">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
              Đội ngũ chuyên nghiệp
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Chúng tôi có đội ngũ chuyên gia hàng đầu trong lĩnh vực công nghệ.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-xl transition duration-300">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
              Hỗ trợ 24/7
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Luôn sẵn sàng giúp đỡ bạn bất cứ khi nào cần.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-xl transition duration-300">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
              Phát triển bền vững
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Chúng tôi cam kết mang đến giá trị lâu dài và phát triển bền vững.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-gradient-to-r from-gray-600 to-gray-800 text-white">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
          Sẵn sàng bắt đầu?
        </h2>
        <p className="mt-3 text-sm sm:text-base max-w-md mx-auto">
          Tham gia ngay hôm nay để trải nghiệm sự khác biệt.
        </p>
        <Link
          to="/register"
          className="mt-6 inline-block bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
        >
          Đăng ký ngay
        </Link>
      </section>
    </div>
  );
};

export default Home;