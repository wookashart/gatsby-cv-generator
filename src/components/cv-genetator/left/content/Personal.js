import React, { Component } from 'react';
import styled from 'styled-components';
import InputWithLabel from '../../../global/InputWithLabel';
import { FunctionContext } from '../../Panels';

const Personal = styled.div`
    display: ${props => props.isActive ? 'block' : 'none'};
`;

const Row = styled.div`
    display: flex;
`;

class PersonalPanel extends Component {
    state = {}
    
    handleOnChange = (e, getData) => {
        const itemName = e.target.name;
        const itemValue = e.target.value;

        this.setState({
            [itemName] : itemValue
        }, () => getData(this.state));
    };

    render() {
        const inputs = [
            [
                { id: 'name', label: 'Imię', type: 'text' },
                { id: 'secondName', label: 'Drugie imię', type: 'text' },
                { id: 'surname', label: 'Imię', type: 'surname' },
            ],
            [
                { id: 'street', label: 'Ulica', type: 'text' },
                { id: 'streetNumber', label: 'Numer domu', type: 'text' },
                { id: 'flatNumber', label: 'Numer mieszkania', type: 'text' },
            ],
            [
                { id: 'postCode', label: 'Kod pocztowy', type: 'text' },
                { id: 'city', label: 'Miasto', type: 'text' },
            ],
            [
                { id: 'birthDate', label: 'Data urodzenia', type: 'date' }
            ],
            [
                {id: 'telephone', label: 'Telefon', type: 'text' }
            ],
            [
                { id: 'email', label: 'Email', type: 'text' }
            ],
        ];

        return (
            <FunctionContext.Consumer>
                {func => (
                    <Personal isActive={this.props.isActive}>
                        <h1>Dane personalne</h1>
                        {inputs.map((el, i) => (
                            <Row key={i}>
                                {el.map((input, index) => (
                                    <InputWithLabel
                                        key={index}
                                        id={input.id}
                                        label={input.label}
                                        name={input.id}
                                        type={input.type}
                                        handleOnChange={e => this.handleOnChange(e, func.getData)}
                                    />
                                ))}
                            </Row>
                        ))}
                    </Personal>
                )}
            </FunctionContext.Consumer>
        );
    }
}

export default PersonalPanel;
