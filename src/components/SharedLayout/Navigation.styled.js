import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    padding-right: 20px;
    width: 1200px;
`;

export const Header = styled.header`
    background-color: #00b451;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    padding: 15px;

    > nav {
        display: flex;
        gap: 20px;
        width: 1200px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 20px;
        padding-right: 20px;
    }
`;

export const Link = styled(NavLink)`
    text-decoration: none;
    font-weight: 700;
    color: var(--global-backgray-color);
    cursor: pointer;

    &.active {
        color: var(--global-white-color);
    }
`;