import { useState } from "react";
import { useDispatch } from "react-redux";

import { login } from "../../redux/auth/authOperations";
import {
    LoginPageHeader,
    LoginPageContainer,
    LoginForm,
    LoginFormLabel,
    LoginFormInput,
    LoginFormSubmitButton,
} from "./Login.styled";

export default function Login() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(login({ email, password }));
        setEmail("");
        setPassword("");
    }

    function handleChange({ target: { name, value } }) {
        switch (name) {
            case "email":
                return setEmail(value);
            case "password":
                return setPassword(value);
            default:
                return;
        }
    }

    return (
        <LoginPageContainer>
            <LoginPageHeader>Login</LoginPageHeader>
            <LoginForm onSubmit={handleSubmit} autoComplete="off">
                <LoginFormLabel htmlFor="email">
                    E-mail:
                    <LoginFormInput
                        id="email"
                        type="text"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Your e-mail"
                        required
                    />
                </LoginFormLabel>
                <LoginFormLabel htmlFor="password">
                    Password:
                    <LoginFormInput
                        id="password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        placeholder="Your password"
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
