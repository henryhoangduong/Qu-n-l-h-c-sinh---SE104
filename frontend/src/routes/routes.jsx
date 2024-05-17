import config from "../config";
import DefaultLayout from "../layouts/DefaultLayout";
import Home from "../pages/Home";
import Change from '../pages/Thay đổi'
import BangDiem from "../pages/Bảng điểm/BangDiem";
import TongKetHocKi from "../pages/Báo cáo/Tổng kết học kì/TongKetHocKi";
import TongKetMon from "../pages/Báo cáo/Tổng kết môn/TongKetMon";
import TraCuu from "../pages/Tra cứu/TraCuu";
import XepLop from "../pages/Xếp lớp/XepLop";

const PublicRoutes = [

    { path: config.routes.themhocsinh, component:Home , layout: DefaultLayout },
    { path: config.routes.bangdiem, component: BangDiem, layout: DefaultLayout },
    { path: config.routes.tongkethocki, component: TongKetHocKi, layout: DefaultLayout },
    {path: config.routes.tongketmon, component: TongKetMon, layout: DefaultLayout},
    { path: config.routes.change, component: Change, layout: DefaultLayout },
    { path: config.routes.home, component: Home, layout: DefaultLayout },
    { path: config.routes.tracuu, component: TraCuu, layout: DefaultLayout },
    { path: config.routes.xeplop, component: XepLop, layout: DefaultLayout },
];

const PrivateRoutes=()=>{}

export { PublicRoutes };