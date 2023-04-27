import {
    RegistrationPageContainer,
    RegistrationPageHeader,
    RegistrationForm,
    RegistrationFormLabel,
    RegistrationFormInput,
    RegistrationFormSubmitButton,
} from "./Registration.styled";

export default function Registration() {
    return (
        <RegistrationPageContainer>
            <RegistrationPageHeader>Registration page</RegistrationPageHeader>
            <RegistrationForm>
                <RegistrationFormLabel htmlFor="name">
                    Name:
                    <RegistrationFormInput
                        id="name"
                        type="text"
                        name="name"
                        required
                    />
                </RegistrationFormLabel>
                <RegistrationFormLabel htmlFor="email">
                    E-mail:
                    <RegistrationFormInput
                        id="email"
                        type="text"
                        name="email"
                        required
                    />
                </RegistrationFormLabel>
                <RegistrationFormLabel htmlFor="password">
                    Password:
                    <RegistrationFormInput
                        id="password"
                        type="password"
                        name="password"
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
