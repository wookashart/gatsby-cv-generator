import React from 'react';
import styled from 'styled-components';
import Personal from '../content/Personal';
import Photo from '../content/Photo';

const TabContent = styled.div`

`;

export default ({ activeTab }) => (
    <TabContent>
        <Personal isActive={activeTab === 0 ? 1 : 0} />
        <Photo isActive={activeTab === 1 ? 1 : 0} />
    </TabContent>
);
