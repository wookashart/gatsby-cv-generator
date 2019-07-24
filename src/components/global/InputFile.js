import React from 'react';
import styled from 'styled-components';

const InputFile = styled.input`
    display: inline-block;
    position: relative;
    height: 40px;

    &:focus {
        outline: none;
    }

    &::after {
        content: attr(placeholder);
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        background: var(--second-color);
        color: var(--white);
        cursor: pointer;
        border-radius: 10px;
        text-align: center;
        font-size: 16px;
        padding-top: 8px;
        transition: 120ms linear background-color;
    }

    &:hover {
        &::after {
            background-color: var(--second-color-darken);
        }
    }
`;

export default ({ placeholder, onChangeAction }) => (
    <InputFile type="file" placeholder={placeholder} onChange={onChangeAction} />
);
