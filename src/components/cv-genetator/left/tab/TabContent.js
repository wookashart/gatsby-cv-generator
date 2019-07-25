import React from 'react';
import styled from 'styled-components';
import Personal from '../content/Personal';
import Photo from '../content/Photo';
import Skills from '../content/Skills';
import Education from '../content/Education';

const TabContent = styled.div`

`;

export default ({ activeTab }) => (
    <TabContent>
        <Personal isActive={activeTab === 0 ? 1 : 0} />
        <Photo isActive={activeTab === 1 ? 1 : 0} />
        <Skills isActive={activeTab === 2 ? 1 : 0} />
        <Education isActive={activeTab === 3 ? 1 : 0} />
    </TabContent>
);
