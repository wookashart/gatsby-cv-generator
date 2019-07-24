import React from "react";
import Layout from "../components/snippet/layout";
import SEO from "../components/snippet/seo";
import { MaxWidthBox } from '../components/global/Box';
import Panels from '../components/cv-genetator/Panels';

const CvGenerator = () => (
	<Layout>
		<SEO title="CV Generator" />
		<MaxWidthBox>
            <Panels />
        </MaxWidthBox>
	</Layout>
)

export default CvGenerator;
