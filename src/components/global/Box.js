import styled from 'styled-components';
import media from '../../styles/media';

export const MaxWidthBox = styled.div`
    max-width: 1440px;
    padding: 0 15px;
    margin: auto;
`;

export const ContentBox = styled.div`
    background-color: var(--white);
	border-radius: 10px;
	padding: 20px;
	margin: 20px 0;
	box-shadow: var(--shadow-base);

	${media.desktop} {
		padding: 50px;
		margin: 50px 0;
	}
`;