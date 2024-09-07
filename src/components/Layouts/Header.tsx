import Logo from '../../assets/SVG/DEVOCEAN_LOGO.svg';

export const Header = () => {
	return (
		<>
			<header className="flex justify-between h-[74px] py-6 px-[90px]">
				<img src={Logo} alt="Devocean" className="w-36 h-6" />

				<div className="flex text-lg font-medium gap-12">
					<div>About</div>
					<div>Project</div>
				</div>
			</header>
		</>
	);
};
