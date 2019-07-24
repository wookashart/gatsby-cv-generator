import React, { Component } from 'react';
import styled from 'styled-components';
import InputWithLabel from '../../../global/InputWithLabel';
import Button from '../../../global/Button';
import { FunctionContext } from '../../Panels';
import SkillsList from './skills/SkillsList';

const SkillsPanel = styled.div`
    display: ${props => props.isActive ? 'block' : 'none'};
`;

const Row = styled.div`
    display: flex;
    align-items: center;
`;

class Skills extends Component {
    state = {
        newSkill: '',
        skills: []
    }

    handleOnChange = e => this.setState({ newSkill: e.target.value });

    addSkill = getSkills => {
        const lastSkills = this.state.skills;
        lastSkills.push(this.state.newSkill);
        this.setState({ skills: lastSkills, newSkill: '' }, () => getSkills(this.state.skills));
    }

    removeSkill = (nr, getSkills) => {
        const lastSkills = this.state.skills;
        const newSkills = [];
        lastSkills.map((skill, index) => {
            if (index !== nr) {
                newSkills.push(skill);
            }
        });

        this.setState({ skills: newSkills }, () => getSkills(this.state.skills));
    }

    render() {
        return (
            <FunctionContext.Consumer>
                {func => (
                    <SkillsPanel isActive={this.props.isActive}>
                        <h1>Umiejętności</h1>
                        <Row>
                            <InputWithLabel
                                id="newSkill"
                                name="newSkill"
                                type="text"
                                value={this.state.newSkill}
                                width="full"
                                handleOnChange={this.handleOnChange}
                            />
                            <Button title="Dodaj" onClickHandler={() => this.addSkill(func.getSkills)} />
                        </Row>
                        <SkillsList list={this.state.skills} removeSkill={this.removeSkill} getSkills={func.getSkills} />
                    </SkillsPanel>
                )}
            </FunctionContext.Consumer>
        )
    }
}

export default Skills;
