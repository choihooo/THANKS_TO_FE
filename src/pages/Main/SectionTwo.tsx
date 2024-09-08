const SectionTwo = () => {
	return (
		<div className="w-full h-[calc(100%-74px)] flex justify-center items-center flex-col">
			<div className="text-[24px] mb-[21px] mt-[50px]">
				The Spirit of DEVOCEAN
			</div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="473"
				height="2"
				viewBox="0 0 473 2"
				fill="none"
			>
				<path
					d="M0 1H473"
					stroke="url(#paint0_linear_903_396)"
					strokeWidth="2"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_903_396"
						x1="461.5"
						y1="1"
						x2="0"
						y2="1"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#010713" />
						<stop offset="0.5" stopColor="#95B8FF" stopOpacity="0.6" />
						<stop offset="1" stopColor="#010713" />
					</linearGradient>
				</defs>
			</svg>
			<div className="text-center mt-[48px] text-[15px] space-y-4">
				<p>DEVOCEAN은 바랍니다. 공유의 문화가 더 깊고, 넓게 퍼지길</p>
				<p>
					DEVOCEAN은 꿈꿉니다. 나누고 더하는 개발 문화로 더 나은 기술이 탄생하길
				</p>
				<p>DEVOCEAN은 믿습니다. 더 나은 기술로 우리 모두가 웃을 수 있길</p>
			</div>
			<div className="grid grid-cols-3 w-full bg-custom-gradient h-[530px]">
				<div className="flex flex-col items-center justify-center">
					<img src="img_value01.png" alt="" />
					<div className="mt-[26px] text-[18px]">문화</div>
					<div className="text-center mt-[20px]">
						노하우는 나누고, 인사이트 더해,
						<br />
						함께 성장할 수 있도록!
					</div>
				</div>
				<div className="flex flex-col items-center justify-center">
					<img src="img_value02.png" alt="" />
					<div className="mt-[26px] text-[18px]">기술</div>
					<div className="text-center mt-[20px]">
						끝없이 펼쳐지는 지식과 경험,
						<br />
						그 속에서 새로운 세상을
						<br />
						발견할 수 있도록!
					</div>
				</div>
				<div className="flex flex-col items-center justify-center">
					<img src="img_value03.png" alt="" />
					<div className="mt-[26px] text-[18px]">사람</div>
					<div className="text-center mt-[20px]">
						더 나은 세상을 위해
						<br />
						기술이 사람을 향할 수 있도록!
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionTwo;
