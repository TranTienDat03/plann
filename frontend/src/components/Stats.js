// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// // Đăng ký các thành phần cần thiết cho Chart.js
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const Stats = () => {
//   const [stats, setStats] = useState({
//     totalPlans: 0,
//     completed: 0,
//     inProgress: 0,
//     important: 0
//   });

//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get('http://localhost:5000/api/todo/stats', {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//         setStats(response.data);
//       } catch (error) {
//         console.error('Lỗi khi lấy thống kê:', error);
//       }
//     };

//     fetchStats();
//   }, []);

//   // Dữ liệu cho biểu đồ
//   const chartData = {
//     labels: ['Đã hoàn thành', 'Đang thực hiện', 'Quan trọng'],
//     datasets: [
//       {
//         label: 'Số lượng kế hoạch',
//         data: [stats.completed, stats.inProgress, stats.important],
//         backgroundColor: ['#28a745', '#007bff', '#dc3545'],
//         borderColor: ['#28a745', '#007bff', '#dc3545'],
//         borderWidth: 1
//       }
//     ]
//   };

//   const chartOptions = {
//     responsive: true,
//     plugins: {
//       legend: { position: 'top' },
//       title: { display: true, text: 'Thống kê Kế hoạch' }
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto mt-8 p-6 bg-gray-50 rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Thống kê Kế hoạch</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         <div className="bg-white p-4 rounded-lg shadow text-center">
//           <h3 className="text-lg font-semibold text-gray-600">Tổng số kế hoạch</h3>
//           <p className="text-2xl font-bold text-blue-600">{stats.totalPlans}</p>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow text-center">
//           <h3 className="text-lg font-semibold text-gray-600">Đã hoàn thành</h3>
//           <p className="text-2xl font-bold text-green-600">{stats.completed}</p>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow text-center">
//           <h3 className="text-lg font-semibold text-gray-600">Đang thực hiện</h3>
//           <p className="text-2xl font-bold text-blue-600">{stats.inProgress}</p>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow text-center">
//           <h3 className="text-lg font-semibold text-gray-600">Quan trọng</h3>
//           <p className="text-2xl font-bold text-red-600">{stats.important}</p>
//         </div>
//       </div>
//       {/* Biểu đồ */}
//       <div className="mt-8">
//         <Bar data={chartData} options={chartOptions} />
//       </div>
//     </div>
//   );
// };

// export default Stats;


import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { getStats } from '../utils/HandleApi'; // Import getStats từ HandleApi

// // Đăng ký các thành phần cần thiết cho Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Stats = () => {
  const [stats, setStats] = useState({
    totalPlans: 0,
    completedPlans: 0, // Sửa tên trường cho khớp với backend
    inProgressPlans: 0, // Sửa tên trường cho khớp với backend
    importantPlans: 0, // Sửa tên trường cho khớp với backend
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getStats(); // Sử dụng hàm getStats từ HandleApi
        setStats({
          totalPlans: data.totalPlans,
          completedPlans: data.completedPlans,
          inProgressPlans: data.inProgressPlans,
          importantPlans: data.importantPlans,
        });
      } catch (error) {
        console.error('Lỗi khi lấy thống kê:', error);
      }
    };

    fetchStats();
  }, []);

  // Dữ liệu cho biểu đồ
  const chartData = {
    labels: ['Đã hoàn thành', 'Đang thực hiện', 'Quan trọng'],
    datasets: [
      {
        label: 'Số lượng kế hoạch',
        data: [stats.completedPlans, stats.inProgressPlans, stats.importantPlans],
        backgroundColor: ['#28a745', '#007bff', '#dc3545'],
        borderColor: ['#28a745', '#007bff', '#dc3545'],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Thống kê Kế hoạch' },
    },
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Thống kê Kế hoạch</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h3 className="text-lg font-semibold text-gray-600">Tổng số kế hoạch</h3>
          <p className="text-2xl font-bold text-blue-600">{stats.totalPlans}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h3 className="text-lg font-semibold text-gray-600">Đã hoàn thành</h3>
          <p className="text-2xl font-bold text-green-600">{stats.completedPlans}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h3 className="text-lg font-semibold text-gray-600">Đang thực hiện</h3>
          <p className="text-2xl font-bold text-blue-600">{stats.inProgressPlans}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h3 className="text-lg font-semibold text-gray-600">Quan trọng</h3>
          <p className="text-2xl font-bold text-red-600">{stats.importantPlans}</p>
        </div>
      </div>
      {/* Biểu đồ */}
      <div className="mt-8">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Stats;
