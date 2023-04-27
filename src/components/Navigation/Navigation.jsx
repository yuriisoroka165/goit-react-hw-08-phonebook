import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { AuthNav } from "../AuthNav/AuthNav";
import { UserMenu } from "components/UserMenu/UserMenu";
import { Container, Header, Link, Loader } from "./Navigation.styled";

export const Navigation = () => {
    return (
        <>
            <Header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/contacts">Contacts</Link>
                </nav>
                <AuthNav />
                <UserMenu />
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
