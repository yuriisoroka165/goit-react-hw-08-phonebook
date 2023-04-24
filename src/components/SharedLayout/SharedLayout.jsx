import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Container, Header, Link } from "./SharedLayout.styled";

export const SharedLayout = () => {
    return (
        <>
            <Header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/contacts">Contacts</Link>
                </nav>
            </Header>
            <Container>
                <main>
                    <Suspense fallback={<p>Loading data....</p>}>
                        <Outlet />
                    </Suspense>
                </main>
            </Container>
        </>
    );
};
