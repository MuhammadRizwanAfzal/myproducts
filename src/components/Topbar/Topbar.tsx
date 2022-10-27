import { FC } from 'react';
import styled from 'styled-components';
import avatar from '../../assets/avatar.png';

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-bottom: ${({ theme }) => theme.size16};
    border-bottom: 0.1rem solid ${({ theme }) => theme.base10};

    > h1 {
        font-size: ${({ theme }) => theme.font18};
        
        span + span {
            color: ${({ theme }) => theme.primary100};
        }
    }
`;

const Avatar = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.size8};
    align-items: center;
    font-size: ${({ theme }) => theme.font14};
    color: ${({ theme }) => theme.base120};

    img {
        width: ${({ theme }) => theme.size32};
    }
`;

const Topbar: FC = () => {
    return (
        <Header>
            <h1><span>my</span><span>products</span></h1>
            <Avatar>
                <img src={avatar} alt="Joe Smith" />
                Joe Smith
            </Avatar>
        </Header>
    )
}

export default Topbar;
