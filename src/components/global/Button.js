import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-color: var(--second-color);
    color: var(--white);
    font-size: ${props => props.size === 'small' ? '12px' : '16px'};
    text-align: center;
    border-radius: 10px;
    transition: 120ms linear background-color;
    cursor: pointer;
    height: ${props => props.size === 'small' ? 'auto' : '40px'};
    min-width: ${props => props.size === 'small' ? 'none' : '100px'};
    display: inline-block;
    padding: 5px 10px;
    margin: 0 5px;

    &:focus {
        outline: none;
    }

    &:hover {
        background-color: var(--second-color-darken);
    }
`;

export default ({ title, onClickHandler, size }) => (
    <Button onClick={onClickHandler} size={size}>
        {title}
    </Button>
)