import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const AuthContainer = styled.div`
    display: flex;
    gap: 20px;
`;

export const Link = styled(NavLink)`
    text-decoration: none;
    font-weight: 700;
    cursor: pointer;
    color: var(--font-color);

    &:active {
        color: var(--global-white-color);
    }
`;