import React, { Component } from 'react';
import styled from 'styled-components';
import { ContentBox } from '../global/Box';
import PanelLeft from './PanelLeft';
import PanelRight from './PanelRight';

export const DataContext = React.createContext();
export const FunctionContext = React.createContext();

const PanelBox = styled(ContentBox)`
    display: flex;
`;

class Panels extends Component {
    state = {
        personal: {
            name: '',
            secondName: '',
            surname: '',
            street: '',
            streetNumber: '',
            flatNumber: '',
            postCode: '',
            city: '',
            birthDate: '',
            telephone: '',
            email: ''
        },
        photo: '',
        skills: []
    }

    getData = personal => this.setState({ personal });
    getPhoto = photo => this.setState({ photo });
    getSkills = skills => this.setState({ skills });

    render () {
        const func = {
            getData: this.getData,
            getPhoto: this.getPhoto,
            getSkills: this.getSkills
        }

        return (
            <DataContext.Provider value={this.state}>
                <FunctionContext.Provider value={func}>
                    <PanelBox>
                        <PanelLeft />
                        <PanelRight />
                    </PanelBox>
                </FunctionContext.Provider>
            </DataContext.Provider>
        );
    }
}

export default Panels;