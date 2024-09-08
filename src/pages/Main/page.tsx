import { SectionsContainer, Section } from 'react-fullpage';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';
import SectionFive from './SectionFive';
import SectionSix from './SectionSix';

interface Options {
	anchors: string[];
	navigation: boolean;
}

const Page: React.FC = () => {
	const options: Options = {
		anchors: [
			'sectionOne',
			'sectionTwo',
			'sectionThree',
			'sectionFour',
			'sectionFive',
			'sectionSix',
		],
		navigation: false,
	};

	return (
		<div className="mt-[50px]">
			<SectionsContainer {...options}>
				<Section>
					<SectionOne />
				</Section>
				<Section>
					<SectionTwo />
				</Section>
				<Section className="section">
					<SectionThree />
				</Section>
				<Section>
					<SectionFour />
				</Section>
				<Section>
					<SectionFive />
				</Section>
				<Section>
					<SectionSix />
				</Section>
			</SectionsContainer>
		</div>
	);
};

export default Page;
