import config from "../config";
import Login from "../pages/Login";
import DefaultLayout from "../layouts/DefaultLayout";
import LoginRegisterLayout from "../layouts/LoginRegisterLayout";
import Profile from '../pages/Profile';
import Home from "../pages/Home";

const PublicRoutes = [
    { path: config.routes.login, component: Login, layout: LoginRegisterLayout },
    { path: config.routes.profile, component: Profile, layout: DefaultLayout },
    { path: config.routes.start, component: Home, layout: DefaultLayout }
];

export { PublicRoutes };