const SectionOne = () => {
	return (
		<div className="w-full h-[calc(100%-74px)] flex justify-center items-center flex-col">
			<img
				src="/images/devocean/devocean_logo_cw 1.png"
				alt="Devocean Logo"
				className="h-auto max-w-full"
			/>
			<div className="text-[20px] font-medium text-center mt-[74px]">
				DEVOCEAN은 SK그룹의 대표 개발자 커뮤니티이자
				<br /> 내/외부 개발자 간 소통과 성장을 위한 플랫폼을 상징합니다.
			</div>
			<div className="flex flex-col items-center justify-center mt-[76px] gap-[20px]">
				<img
					src="/images/devocean/devocean_developers.png"
					alt="Devocean Developers"
					className="h-auto max-w-full delay-500 "
				/>
				<img
					src="/images/devocean/devocean_devotion.png"
					alt="Devocean Devotion"
					className="h-auto max-w-full delay-300 "
				/>
				<img
					src="/images/devocean/devocean_tech.png"
					alt="Devocean Tech"
					className="h-auto max-w-full "
				/>
			</div>
		</div>
	);
};

export default SectionOne;
