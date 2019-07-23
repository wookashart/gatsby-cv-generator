import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import media from '../../styles/media';

const MenuItem = styled.li`
    display: inline-block;
    margin: 5px 0;
    width: 100%;
    flex: 1;
    box-shadow: var(--shadow-base);
    border-radius: 10px;
    padding: 30px;
    border: 2px solid transparent;
    transition: 120ms linear border;

    ${media.tablet} {
        margin: 15px;
        width: calc(100% - 30px);
    }

    ${media.desktop} {
        max-width: calc((100% / 3) - 30px);
    }

    a {
        display: flex;

        > div {
            flex: 1;
            margin-left: 15px;
        }
    }

    svg {
        width: auto;
        height: 50px;
        color: var(--second-color);
        margin-top: 15px;
    }

    &:hover {
        border-color: var(--second-color);
    }
`;

export default ({ title, subtitle, url, icon }) => (
    <MenuItem>
        <Link to={ url }>
            { icon }
            <div>
                <h2>{ title }</h2>
                <p>{ subtitle }</p>
            </div>
        </Link>
    </MenuItem>
);
