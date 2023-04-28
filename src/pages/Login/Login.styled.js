import styled from "styled-components";

export const LoginPageContainer = styled.div`
    width: 300px;
    padding: 20px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    border: 1px solid var(--global-gray-color);
    border-radius: 5px;
`;

export const LoginPageHeader = styled.h1`
    margin-top: 0;
    margin-bottom: 40px;
    text-align: center;
`;

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const LoginFormLabel = styled.label`
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--global-black-color);
`;

export const LoginFormInput = styled.input`
    padding-left: 10px;
    padding-right: 10px;
    height: 30px;
    border: none;
    border-radius: 5px;
    box-shadow: var(--input-box-shadow);

    &:focus {
        outline: 1px solid var(--global-green-color);
    }
`;

export const LoginFormSubmitButton = styled.button`
    width: 100px;
    height: 30px;
    background-color: var(--global-white-color);
    border: none;
    border-radius: 5px;
    box-shadow: var(--input-box-shadow);
    cursor: pointer;

    &:active {
        background-color: var(--global-green-color);
        color: var(--global-white-color);
`;
