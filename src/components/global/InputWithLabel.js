import React from 'react';
import styled from 'styled-components';

const Fieldset = styled.fieldset`
    border: none;
    display: flex;
    flex-flow: column;
    flex: 1;
    max-width: 315px;
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

const InputWithLabel = ({label, id, type, name, handleOnChange}) => {
    return (
        <Fieldset>
            <label htmlFor={id}>
                {label}
            </label>
            <input
                id={id}
                type={type}
                name={name}
                onChange={(event) => handleOnChange(event)}
            />
        </Fieldset>
    )
};

export default InputWithLabel;