    import { ROUTERS } from "./utils/router";
    import HomePage from "./pages/user/homePage";
    import { Routes, Route, Navigate } from "react-router-dom";
    import Masterlayout from "./theme/masterlayout";
    import AboutNews from "pages/user/AboutNews";
    import AboutIntroduce from "pages/user/AboutIntroduce";
    import Review from "pages/user/ExamTools/Review"; 
    import Register_Exam from "pages/user/Register_Exam";
    import TEST_ONLINE from "pages/user/TEST_ONLINE";
    import TestBank from "pages/user/ExamTools/test bank";
    import CourseOnline from "pages/user/ExamTools/course online";
    import Admin from "pages/admin/Admin";
    import Dashboard from "pages/admin/Content/DashBoard";
    import ManageUser from "pages/admin/Content/ManageUser";
    import { ToastContainer } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';
import CourseDetail from "pages/user/CartList/CourseDetails"; // Import component CourseDetail
    const renderUserRouter = () => {
        return (
            <>
                <Masterlayout>
                    <Routes>
                        <Route path={ROUTERS.USER.HOME} element={<HomePage />} />
                        <Route path={ROUTERS.USER.NEWS} element={<AboutNews />} />
                        <Route path={ROUTERS.USER.INTRODUCE} element={<AboutIntroduce />} />
                        <Route path={ROUTERS.USER.Review} element={<Review />}>
                            <Route index element={<TestBank />} />
                            <Route path="testbank" element={<TestBank />} />
                            <Route path="courseOnline" element={<CourseOnline />} />
                        </Route>
                        <Route path={ROUTERS.USER.RegisterExam} element={<Register_Exam />} />
                        <Route path={ROUTERS.USER.TestOnline} element={<TEST_ONLINE />} />
                        <Route path={ROUTERS.USER.testbank} element={<TestBank />} />
                        <Route path={ROUTERS.USER.courseOnline} element={<CourseOnline />} />
                        <Route path={ROUTERS.USER.admin} element={<Admin />} >
                            <Route index element={<Dashboard />} />
                            <Route path="manage-users" element={<ManageUser />} />
                        </Route>
                        <Route path="/" element={<Navigate to={ROUTERS.USER.HOME} />} />
                    </Routes>
                        {/* Route mới cho CourseDetail */}
                        <Route path={ROUTERS.USER.COURSE_DETAIL} element={<CourseDetail />} />

<Route path={ROUTERS.USER.admin} element={<Admin />}>
    <Route index element={<Dashboard />} />
    <Route path="manage-users" element={<ManageUser />} />
</Route>
<Route path="/" element={<Navigate to={ROUTERS.USER.HOME} />} />

                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </Masterlayout>
            </>
        );
    };

    const RouterCustom = () => {
        return renderUserRouter();
    };

    export default RouterCustom;
