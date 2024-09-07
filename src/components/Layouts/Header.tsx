import { Link } from 'react-router-dom';
import Logo from '../../assets/SVG/DEVOCEAN_LOGO.svg';

export const Header = () => {
	return (
		<header className="fixed top-0 left-0 right-0 flex justify-between items-center h-[74px] py-6 px-[90px] z-10 bg-[#010713]">
			<img src={Logo} alt="Devocean" className="w-[148px] h-[25px]" />
			<nav className="flex font-sktMedium gap-12">
				<Link to={'/'}>About</Link>
				<Link to={'/project'}>Project</Link>
			</nav>
		</header>
	);
};
