import styled from "styled-components";

export const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
    color: #E8833A;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    top: 0;
    a {
        text-decoration: none;
        color: #E8833A;
    }
    button {
        width: 30px;
        background-color: white;
        position: absolute;
        left: 20px;
        background-color: inherit;
        cursor: pointer;
    }
    img {
        width: 24px;
    }
`;