import React from 'react';
import Tab from './left/tab/Tab';
import styled from 'styled-components';

const Section = styled.section`
    border-right: 1px solid var(--main-color);
    flex: 1 0 auto;
    padding-right: 15px;
`;

const Left = () => {
    return(
        <Section>
            <Tab />
        </Section>
    )
};

export default Left;