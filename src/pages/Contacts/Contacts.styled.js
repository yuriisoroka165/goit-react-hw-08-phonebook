import styled from "styled-components";

export const Container = styled.div`
    width: 500px;
    margin-left: auto;
    margin-right: auto;
`;

export const NotAuthContainer = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 20px;
    border-radius: 4px;
    transform: translate(-50%, -50%) scale(1);
`;
