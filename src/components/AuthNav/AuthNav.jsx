import { AuthContainer, Link } from "./AuthNav.styled";

export function AuthNav() {
    return (
        <AuthContainer>
            <Link to="/registration">Registartion</Link>
            <Link to="/login">Login</Link>
        </AuthContainer>
    );
}
