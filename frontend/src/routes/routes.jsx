import config from "../config";
import Login from "../pages/Login";
import DefaultLayout from "../layouts/DefaultLayout";
import LoginRegisterLayout from "../layouts/LoginRegisterLayout";
import StudentProfile from '../pages/Student/Profile';
import StudentAttendance from "../pages/Student/Attendance";
import SemesterSumary from "../pages/Teacher/SemesterSumary";
import Home from "../pages/Home";
import Change from '../pages/Thay đổi'

const PublicRoutes = [
    { path: config.routes.login, component: Login, layout: LoginRegisterLayout },
    { path: config.routes.studentprofile, component: StudentProfile, layout: DefaultLayout },
    { path: config.routes.start, component: Home, layout: DefaultLayout },
    { path: config.routes.studentattendance, component: StudentAttendance, layout: DefaultLayout },
    { path: config.routes.semestersumary, component: SemesterSumary, layout: DefaultLayout },
    {path: config.routes.change, component:Change, layout: DefaultLayout}
];

export { PublicRoutes };