import {
    LoginPageHeader,
    LoginPageContainer,
    LoginForm,
    LoginFormLabel,
    LoginFormInput,
    LoginFormSubmitButton,
} from "./Login.styled";

export default function Login() {
    return (
        <LoginPageContainer>
            <LoginPageHeader>Login page</LoginPageHeader>
            <LoginForm>
                <LoginFormLabel htmlFor="email">
                    E-mail:
                    <LoginFormInput
                        id="email"
                        type="text"
                        name="email"
                        required
                    />
                </LoginFormLabel>
                <LoginFormLabel htmlFor="password">
                    Password:
                    <LoginFormInput
                        id="password"
                        type="password"
                        name="password"
                        required
                    />
                </LoginFormLabel>
                <LoginFormSubmitButton type="submit">
                    Login
                </LoginFormSubmitButton>
            </LoginForm>
        </LoginPageContainer>
    );
}
