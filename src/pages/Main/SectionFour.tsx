const SectionFour = () => {
	return (
		<div className="w-[100%] h-[calc(100%-74px)] flex flex-col justify-center items-center">
			<div className="text-[36px] mt-[80px]">Educational Programs</div>
			<div className="text-[18px] mt-[12px]">
				데보션의 교육 프로그램을 소개합니다.
			</div>
			<div className="flex gap-[16px] mt-[44px]">
				<div className="w-[592px] h-[592px] bg-[url('/youngBg.png')] bg-cover bg-center flex flex-col justify-center items-center">
					<div className="text-[52px]">데보션 영</div>
					<div className="text-center text-[18px] mt-[12px]">
						SK텔레콤은 개발자 생태계 내 소통과 공유 문화를 <br />
						확산시킬 대학생 테크 인플루언서
					</div>
					<div className="text-[14px] mt-[67px]">
						프로젝트 결과물 보러가기 &gt;
					</div>
				</div>
				<div className="w-[592px] h-[592px] bg-[url('/AiBg.png')] bg-cover bg-center flex flex-col justify-center items-center">
					<div className="text-[52px]">Open Lab</div>
					<div className="text-center text-[18px] mt-[12px]">
						전문가가 주도하는 AI 스터디 <br />
						프로그램 운영을 통해 지식 공유 및 건강한
						<br />
						개발 문화를 구축
					</div>
					<div className="text-[14px] mt-[40px]">
						프로젝트 결과물 보러가기 &gt;
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionFour;
