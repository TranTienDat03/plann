import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-blue-600">Về Chúng Tôi</h1>
      <p className="text-lg text-gray-700 mt-4 max-w-2xl text-center">
        Chào mừng bạn đến với nền tảng lập kế hoạch cá nhân của chúng tôi! Chúng tôi tin rằng
        lập kế hoạch hiệu quả không chỉ giúp bạn quản lý công việc tốt hơn mà còn cải thiện
        chất lượng cuộc sống.
      </p>

      {/* Tầm quan trọng của lập kế hoạch */}
      <section className="max-w-3xl mx-auto bg-white p-6 mt-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Tại sao lập kế hoạch cá nhân quan trọng?</h2>
        <p>
          Việc lập kế hoạch giúp bạn xác định rõ mục tiêu, tối ưu hóa thời gian và giảm căng thẳng.
          Khi có một kế hoạch cụ thể, bạn sẽ làm việc hiệu quả hơn, duy trì động lực và đạt được nhiều
          thành tựu trong cuộc sống.
        </p>
      </section>

      {/* Tính năng của trang web */}
      <section className="max-w-3xl mx-auto bg-white p-6 mt-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Chúng tôi cung cấp những gì?</h2>
        <ul className="list-disc pl-5">
          <li>Quản lý công việc và danh sách nhiệm vụ.</li>
          {/* <li>Lập kế hoạch cá nhân theo tuần/tháng/năm.</li> */}
          <li>Theo dõi tiến độ công việc bằng biểu đồ thống kê.</li>
          <li>Chia sẻ kế hoạch và làm việc nhóm hiệu quả.</li>
        </ul>
      </section>

      {/* Kết nối với chúng tôi */}
      <section className="max-w-3xl mx-auto bg-white p-6 mt-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Hãy bắt đầu ngay hôm nay!</h2>
        <p>
          Hãy tham gia cùng chúng tôi và biến những ý tưởng của bạn thành hiện thực bằng cách quản lý
          công việc một cách khoa học. Thành công bắt đầu từ một kế hoạch tốt!
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 p-4 mt-6">
        &copy; 2025 Ứng Dụng Lập Kế Hoạch Cá Nhân. Mọi quyền được bảo lưu.
      </footer>
    </div>
  );
};

export default About;
