import { FC } from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.svg';
import search from '../../assets/search.svg';
import plus from '../../assets/plus.svg';

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-color: ${({ theme }) => theme.primary120};

    > img {
        padding: ${({ theme }) => theme.size24};
    }

    > a {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        padding: ${({ theme }) => theme.size8};
        font-size: ${({ theme }) => theme.font12};
        text-decoration: none;
        color: ${({ theme }) => theme.base0};
    }
`;

const Navbar: FC = () => {
    return (
        <Nav>
            <img src={logo} alt="myproducts" />
            <a href="/find">
                <img src={search} alt="Find a Product" />
                <span>Find</span>
            </a>
            <a href="/add">
                <img src={plus} alt="Add a Product" />
                <span>Add</span>
            </a>
        </Nav>
    )
}

export default Navbar;
