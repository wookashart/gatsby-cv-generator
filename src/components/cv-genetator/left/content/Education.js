import React, { Component } from 'react';
import styled from 'styled-components';

const EducationPanel = styled.div`
    display: ${props => props.isActive ? 'block' : 'none'};
`;

class Education extends Component {
    render() {
        return (
            <EducationPanel isActive={this.props.isActive}>
                <h1>Wykształcenie</h1>
            </EducationPanel>
        )
    }
}

export default Education;