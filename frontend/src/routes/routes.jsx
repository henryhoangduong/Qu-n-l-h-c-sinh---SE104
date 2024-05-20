import config from "../config";
import Login from "../pages/Login";
import DefaultLayout from "../layouts/DefaultLayout";
import LoginRegisterLayout from "../layouts/LoginRegisterLayout";
import StudentProfile from '../pages/Student/Profile';
import StudentAttendance from "../pages/Student/Attendance";
import SemesterSumary from "../pages/Teacher/SemesterSumary";
import Home from "../pages/Home";
import Change from '../pages/Thay đổi'
import BangDiem from "../pages/Bảng điểm/BangDiem";
import TongKetHocKi from "../pages/Báo cáo/Tổng kết học kì/TongKetHocKi";
import TongKetMon from "../pages/Báo cáo/Tổng kết môn/TongKetMon";
import { layer } from "@fortawesome/fontawesome-svg-core";
import TraCuu from "../pages/Tra cứu/TraCuu";
import XepLop from "../pages/Xếp lớp/XepLop";

const PublicRoutes = [
    // { path: config.routes.login, component: Login, layout: LoginRegisterLayout },
    // { path: config.routes.studentprofile, component: StudentProfile, layout: DefaultLayout },
    { path: config.routes.themhocsinh, component:Home , layout: DefaultLayout },
    { path: config.routes.bangdiem, component: BangDiem, layout: DefaultLayout },
    { path: config.routes.tongkethocki, component: TongKetHocKi, layout: DefaultLayout },
    {path: config.routes.tongketmon, component: TongKetMon, layout: DefaultLayout},
    { path: config.routes.change, component: Change, layout: DefaultLayout },
    { path: config.routes.home, component: Home, layout: DefaultLayout },
    { path: config.routes.tracuu, component: TraCuu, layout: DefaultLayout },
    { path: config.routes.xeplop, component: XepLop, layout: DefaultLayout },
];

export { PublicRoutes };