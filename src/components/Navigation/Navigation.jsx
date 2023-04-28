import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { AuthNav } from "../AuthNav/AuthNav";
import { UserMenu } from "components/UserMenu/UserMenu";
import { selectIsAuthorized } from "../../redux/auth/authSelectors";
import { Container, Header, Link, Loader } from "./Navigation.styled";

export const Navigation = () => {
    const isAuthorized = useSelector(selectIsAuthorized);
    return (
        <>
            <Header>
                <nav>
                    <Link to="/">Home</Link>
                    {isAuthorized && <Link to="/contacts">Contacts</Link>}
                </nav>
                {isAuthorized ? <UserMenu /> : <AuthNav />}
            </Header>
            <Container>
                <main>
                    <Suspense fallback={<Loader>Loading data....</Loader>}>
                        <Outlet />
                    </Suspense>
                </main>
            </Container>
        </>
    );
};
