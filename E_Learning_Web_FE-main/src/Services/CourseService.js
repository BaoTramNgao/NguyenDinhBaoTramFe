// src/Services/CourseService.js

import axios from 'axios';

// Cấu hình Axios
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // Đổi thành URL API của bạn
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Hàm lấy dữ liệu khóa học
export const getCourseById = (id) => {
  return axiosInstance.get(`/api/courses/${id}`);
};

export default axiosInstance;
