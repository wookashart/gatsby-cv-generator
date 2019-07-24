import React from 'react';
import styled from 'styled-components';

const Fieldset = styled.fieldset`
    border: none;
    display: flex;
    flex-flow: column;
    flex: 1;
    max-width: ${props => props.width === 'full' ? '100%' : '315px' };
    min-width: 200px;

    label {
        margin-bottom: 5px;
    }

    input {
        width: 100%;
        height: 35px;
        color: var(--second-color);
        font-size: 16px;
        padding: 0 10px;

        &:focus {
            outline: none;
            border: 1px solid var(--second-color);
        }
    }
`;

const InputWithLabel = ({label, id, type, name, value, handleOnChange, width}) => {
    return (
        <Fieldset width={width}>
            <label htmlFor={id}>
                {label}
            </label>
            <input
                id={id}
                type={type}
                name={name}
                value={value}
                onChange={event => handleOnChange(event)}
            />
        </Fieldset>
    )
};

export default InputWithLabel;