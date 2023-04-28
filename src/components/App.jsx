import { lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Navigation } from "./Navigation/Navigation";
import { refreshCurrentUser } from "redux/auth/authOperations";

const Home = lazy(() => import("../pages/Home"));
const Contacts = lazy(() => import("../pages/Contacts"));
const Login = lazy(() => import("../pages/Login"));
const Registration = lazy(() => import("../pages/Registration"));

export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(refreshCurrentUser());
    }, [dispatch]);

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
