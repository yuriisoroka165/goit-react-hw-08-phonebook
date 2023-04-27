import styled from "styled-components";

export const UserMenuContainer = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`;

export const UserHello = styled.p`
    font-weight: 700;
    color: var(--font-color);
`;

export const LogOutButton = styled.button`
    width: 80px;
    height: 30px;
    background-color: var(--global-white-color);
    border: none;
    border-radius: 5px;
    box-shadow: var(--input-box-shadow);
    cursor: pointer;

    &:active {
        background-color: var(--global-green-color);
        color: var(--global-white-color);
    }
`;