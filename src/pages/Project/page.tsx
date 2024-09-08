import { DevoceanYoungSection } from './container/DevoceanYoungSection';
import { InfoSection } from './container/InfoSection';
import { OpenLabSection } from './container/OpenLabSection';

const Projectpage = () => {
	return (
		<div className="px-[90px] pt-[138px] pb-[181px]">
			<InfoSection />
			<DevoceanYoungSection />
			<OpenLabSection />
		</div>
	);
};

export default Projectpage;
