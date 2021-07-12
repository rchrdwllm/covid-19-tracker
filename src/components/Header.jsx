import styled from "styled-components";
import covid from "../assets/covid.jpg";

const StyledHeader = styled.header`
    position: relative;
    height: 85vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    &::before {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        content: "";
        z-index: -1;
        background-image: url(${covid});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        filter: brightness(70%);
    }
    .header-text {
        font-size: 4rem;
        color: #ffffff;
        text-align: center;
        @media screen and (min-width: 1536px) {
            font-size: 7rem;
        }
    }
`;

export const Header = () => {
    return (
        <StyledHeader className="header">
            <h1 className="header-text">COVID-19 Statistics Tracker</h1>
        </StyledHeader>
    );
};
