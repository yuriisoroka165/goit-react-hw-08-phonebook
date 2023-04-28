import { useState } from "react";
import { useDispatch } from "react-redux";

import { registration } from "../../redux/auth/authOperations";
import {
    RegistrationPageContainer,
    RegistrationPageHeader,
    RegistrationForm,
    RegistrationFormLabel,
    RegistrationFormInput,
    RegistrationFormSubmitButton,
} from "./Registration.styled";

export default function Registration() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(registration({ name, email, password }));
        setName("");
        setEmail("");
        setPassword("");
    }

    function handleChange({ target: { name, value } }) {
        switch (name) {
            case "name":
                return setName(value);
            case "email":
                return setEmail(value);
            case "password":
                return setPassword(value);
            default:
                return;
        }
    }

    return (
        <RegistrationPageContainer>
            <RegistrationPageHeader>Registration</RegistrationPageHeader>
            <RegistrationForm onSubmit={handleSubmit} autoComplete="off">
                <RegistrationFormLabel htmlFor="name">
                    Name:
                    <RegistrationFormInput
                        id="name"
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                    />
                </RegistrationFormLabel>
                <RegistrationFormLabel htmlFor="email">
                    E-mail:
                    <RegistrationFormInput
                        id="email"
                        type="text"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Your e-mail"
                        required
                    />
                </RegistrationFormLabel>
                <RegistrationFormLabel htmlFor="password">
                    Password:
                    <RegistrationFormInput
                        id="password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        placeholder="Your password"
                        required
                    />
                </RegistrationFormLabel>
                <RegistrationFormSubmitButton type="submit">
                    Registration
                </RegistrationFormSubmitButton>
            </RegistrationForm>
        </RegistrationPageContainer>
    );
}
