import { lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Navigation } from "./Navigation/Navigation";
import { refreshCurrentUser } from "redux/auth/authOperations";
import { PrivateRoute } from "./Navigation/PrivateRoute";
import { RestrictedRoute } from "./Navigation/RestrictedRoute";
import { selectIsRefreshing } from "redux/auth/authSelectors";

const Home = lazy(() => import("../pages/Home/Home"));
const Contacts = lazy(() => import("../pages/Contacts/Contacts"));
const Login = lazy(() => import("../pages/Login/Login"));
const Registration = lazy(() => import("../pages/Registration/Registration"));

export default function App() {
    const dispatch = useDispatch();
    const isRefreshing = useSelector(selectIsRefreshing);

    useEffect(() => {
        dispatch(refreshCurrentUser());
    }, [dispatch]);

    return (
        !isRefreshing && (
            <Routes>
                <Route path="/" element={<Navigation />}>
                    <Route index element={<Home />} />
                    <Route
                        path="registration"
                        element={
                            <RestrictedRoute
                                component={Registration}
                                redirectTo="/contacts"
                            />
                        }
                    />
                    <Route
                        path="login"
                        element={
                            <RestrictedRoute
                                component={Login}
                                redirectTo="/contacts"
                            />
                        }
                    />
                    <Route
                        path="contacts"
                        element={
                            <PrivateRoute
                                component={Contacts}
                                redirectTo="/login"
                            />
                        }
                    />
                </Route>
            </Routes>
        )
    );
}
