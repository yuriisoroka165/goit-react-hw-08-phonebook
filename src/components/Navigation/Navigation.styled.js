import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
`;

export const Header = styled.header`
    display: flex;
    height: 60px;
    justify-content: space-between;
    align-items: center;
    background-color: var(--global-green-color);
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    padding-left: 450px;
    padding-right: 450px;

    > nav {
        display: flex;
        gap: 20px;
    }
`;

export const Link = styled(NavLink)`
    text-decoration: none;
    font-weight: 700;
    cursor: pointer;

    &:visited {
        color: var(--font-color);
    }

    &.active {
        color: var(--global-white-color);
    }
`;

export const Loader = styled.p`
    margin-top: 30px;
    font-size: 26px;
    font-weight: 700;
`;
