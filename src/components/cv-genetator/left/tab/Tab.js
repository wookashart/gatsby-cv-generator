import React, { Component } from 'react';
import styled from 'styled-components';
import TabHeader from './TabHeader';
import TabContent from './TabContent';

const List = styled.ul`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid var(--main-color);
`;

class Tab extends Component {
    state = {
        activeTab : 0,
        tabName : ['Dane personalne', 'Zdjęcie', 'Umiejętności', 'Wykształcenie', 'Doświadczenie', 'Hobby']
    };

    handleActiveTab = (activeIndex) => {
        this.setState({
            activeTab : activeIndex
        })
    };

    render() {
        return(
            <>
                <List>
                    {this.state.tabName.map((tab, index) =>
                        <TabHeader
                            tabTitle={tab}
                            isActive={this.state.activeTab === index ? 1 : 0}
                            handleActiveTab={this.handleActiveTab}
                            index={index}
                            key={index}
                        />
                    )}
                </List>
                <TabContent activeTab={this.state.activeTab} />
            </>
        )
    }
}

export default Tab;
