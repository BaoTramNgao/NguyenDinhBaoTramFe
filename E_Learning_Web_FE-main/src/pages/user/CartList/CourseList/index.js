import  { memo } from "react";
import CourseCard from "../CourseCard";
import { Link } from 'react-router-dom';
const CourseList =()=>{
    const courses = [ // Đổi tên từ Course thành courses
        {
            id: 1,
            title: 'TOEIC Speaking & Writing Level 1',
            image: 'https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Course/Media/Images/49891b8d-e026-4093-be5c-6ec141c934fd/image_49891b8d-e026-4093-be5c-6ec141c934fd_sw-1_small_1727939326469.png',
            price: '2.830.000đ',
            discountedPrice: '1.990.000đ',
            rating: 5,
        },
        {
            id: 2,
            title: 'TOEIC Speaking & Writing Level 2', // Thay đổi tên cho khác biệt
            image: 'https://han01.vstorage.vngcloud.vn/v1/AUTH_6831ce3c90cd4f47a8ca18d6545cddf9/public/Course/Media/Images/49891b8d-e026-4093-be5c-6ec141c934fd/image_49891b8d-e026-4093-be5c-6ec141c934fd_sw-1_small_1727939326469.png',
            price: '2.830.000đ',
            discountedPrice: '1.990.000đ',
            rating: 5,
        },
    ];

    return (
       <div className="Regis_Ex-List">
         {courses.map((course) => ( // Sử dụng tên biến course
           <Link key={course.id} to={`/course/${course.id}`} className="course-link">
             <CourseCard Course={course} />  {/* Điều hướng tới trang chi tiết khóa học */}
           </Link>
         ))}
       </div>
     );
   };

export default memo(CourseList);