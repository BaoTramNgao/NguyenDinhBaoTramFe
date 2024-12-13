// src/pages/user/CartList/CourseDetails/index.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCourseById } from 'Services/CourseService';  // Import API service

const CourseDetail = () => {
  const { id } = useParams(); // Lấy id từ URL
  const [courseData, setCourseData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await getCourseById(id); // Gọi API từ service
        setCourseData(response.data);
      } catch (err) {
        setError('Failed to load course data');
        console.error(err);
      }
    };

    fetchCourseData();
  }, [id]); // Chỉ gọi lại useEffect nếu id thay đổi

  if (error) return <div>{error}</div>;
  if (!courseData) return <div>Loading...</div>;
// Callback for quiz button click
  const handleQuizStart = useCallback((quizTitle) => {
    alert(`Start Quiz: ${quizTitle}`);  }, []);
  return (
    <div className="course-detail">
      <h1>{courseData.title}</h1>
      <p>{courseData.description}</p>

      {/* Video Section */}
      <div className="course-video">
        <h2>Course Video</h2>
        <video controls src={courseData.videoUrl} />
      </div>

      {/* Bài tập Section */}
      <div className="course-exercises">
        <h2>Exercises</h2>
        <ul>
          {courseData.exercises.map((exercise, index) => (
            <li key={index}>{exercise.title}</li>
          ))}
        </ul>
      </div>

      {/* Trắc nghiệm Section */}
      <div className="course-quiz">
        <h2>Quiz</h2>
        <ul>
          {courseData.quizzes.map((quiz, index) => (
            <li key={index}>
              <button onClick={() => alert(`Start Quiz ${quiz.title}`)}>
                {quiz.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseDetail;
