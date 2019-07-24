import React from 'react';
import styled from 'styled-components';
import Button from '../../../../global/Button';

const SkillsList = styled.ul`
    margin: 30px 0;

    li {
        margin: 6px 0;

        span {
            margin-left: 10px;
        }
    }
`;

export default ({ list, removeSkill, getSkills }) => (
    <SkillsList>
        {list.map((skill, index) => (
            <li key={index}>
                <Button title="Usuń" onClickHandler={() => removeSkill(index, getSkills)} size="small" />
                <span>{skill}</span>
            </li>
        ))}
    </SkillsList>
);
