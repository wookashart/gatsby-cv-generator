import React from 'react';
import styled from 'styled-components';

const HeaderItem = styled.li`
    position: relative;
    padding: 15px;
    border: 1px solid var(--main-color);
    border-left-color: ${props => props.active ? 'var(--main-color)' : 'transparent'};
    border-right-color: ${props => props.active ? 'var(--main-color)' : 'transparent'};
    border-top-color: ${props => props.active ? 'var(--main-color)' : 'transparent'};
    border-bottom: transparent;
    cursor: pointer;
    text-align: center;

    &::after {
        content: '';
        height: 2px;
        width: 100%;
        position: absolute;
        bottom: -2px;
        left: 0;
        background-color: ${props => props.active ? 'var(--white)' : 'transparent'};
    }
`;

const Header = ({tabTitle, isActive, handleActiveTab, index}) => {
    return (
        <HeaderItem
            active={isActive}
            onClick={() => handleActiveTab(index)}
        >
            {tabTitle}
        </HeaderItem>
    );
};

export default Header;
