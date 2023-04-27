import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { Navigation } from "./Navigation/Navigation";

const Home = lazy(() => import("../pages/Home"));
const Contacts = lazy(() => import("../pages/Contacts"));
const Login = lazy(() => import("../pages/Login"));
const Registration = lazy(() => import("../pages/Registration"));

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="registration" element={<Registration />} />
                <Route path="login" element={<Login />} />
            </Route>
        </Routes>
    );
}
