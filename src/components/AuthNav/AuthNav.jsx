import { AuthContainer, Link } from "./AuthNav.styled";

export function AuthNav() {
    return (
        <AuthContainer>
            <Link to="/registration">Registration</Link>
            <Link to="/login">Login</Link>
        </AuthContainer>
    );
}
