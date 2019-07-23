import React from "react";
import styled from 'styled-components';
import Layout from "../components/snippet/layout";
import SEO from "../components/snippet/seo";
import { MaxWidthBox } from '../components/global/MaxWidthBox';
import MenuItem from '../components/homepage/MenuItem';
import media from '../styles/media';

import { DocumentAdd } from 'styled-icons/typicons/DocumentAdd';
import { Download } from 'styled-icons/boxicons-regular/Download';
import { LogInCircle } from 'styled-icons/boxicons-regular/LogInCircle';

const HomepageMenu = styled.div`
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

const HomepageMenuList = styled.ul`
	display: flex;
	flex-flow: column;

	${media.desktop} {
		flex-flow: row;
	}
`;

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<MaxWidthBox>
			<HomepageMenu>
				<HomepageMenuList>
					<MenuItem
						title="CV Generator"
						subtitle="Przejdź bezpośrednio do CV generatora, po zamknięciu strony wszystkie Twoje dane zostaną utracone."
						url="/cv-generator"
						icon={<DocumentAdd />}
					/>
					<MenuItem
						title="Załaduj z pliku"
						subtitle="Mozesz załadować dane do CV bezpośrednio z pliku."
						url="/import-file"
						icon={<Download />}
					/>
					<MenuItem
						title="Zaloguj się"
						subtitle="Lub jezeli nie masz konta, mozesz je załozyć."
						url="/login"
						icon={<LogInCircle />}
					/>
				</HomepageMenuList>
			</HomepageMenu>
		</MaxWidthBox>
	</Layout>
)

export default IndexPage;
