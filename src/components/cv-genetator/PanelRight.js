import React from 'react';
import styled from 'styled-components';

import { DataContext } from './Panels';

const Section = styled.section`
    flex: 1 0 auto;
    padding: 15px;
`;

const Right = () => {
    return (
        <DataContext.Consumer>
            {info => (
                <Section>
                    <p>Podgląd:</p>

                    <div>
                        <span>{info.personal.name} </span>
                        <span>{info.personal.secondName} </span>
                        <span>{info.personal.surname}</span>

                    </div>
                    <div>
                    <img src={info.photo} alt="" />
                    </div>
                </Section>
            )}
            
        </DataContext.Consumer>
    );
}

export default Right;
