import { CaretRight } from '@phosphor-icons/react';

const Projectpage = () => {
	return (
		<div className="px-[90px] pt-[138px]">
			<div className="min-h-[1000px]">
				<section className="mb-[69px]">
					<div className="font-sktBold text-lg mb-6">Devocean 프로젝트</div>
					<div className="flex space-x-4">
						<div className="cursor-pointer flex-col justify-end w-[220px] border border-[#6F6F83] rounded-2xl px-5 py-8 space-y-[10px]">
							<div className="flex items-center justify-between font-sktBold text-lg">
								데보션 영{' '}
								<span className="pb-1">
									<CaretRight size={26} />
								</span>
							</div>
							<div className="font-sktRegular text-md text-[#A2A2AF] leading-4 space-y-2">
								<p>데보션 영 멤버들의</p>
								<p>프로젝트 보러가기</p>
							</div>
						</div>
						<div className="cursor-pointer flex-col justify-end w-[220px] border border-[#6F6F83] rounded-2xl px-5 py-8 space-y-[10px]">
							<div className="flex items-center justify-between font-sktBold text-[24px]">
								OpenLab{' '}
								<span className="pb-1">
									<CaretRight size={26} />
								</span>
							</div>
							<div className="font-sktRegular text-md text-[#A2A2AF] leading-4 space-y-2">
								<p>오픈랩 AI 스터디에서</p>
								<p>제작한 프로젝트 보러가기</p>
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className="flex mb-[29px]">
						<div className="font-sktBold text-lg mb-6">데보션 영</div>
					</div>
					<div className="flex justify-between items-center">
						<div className="font-sktRegular text-sm">
							데보션 영(Devocean Young)은 SK텔레콤의 개발자 커뮤니티인
							데보션(Devocean)에서 운영하는 프로그램으로, <br />
							주로 젊은 개발자들이 참여하여 기술적 역량을 키우고 다양한
							프로젝트에 참여할 수 있는 기회를 제공합니다.
						</div>
						<div className="font-sktRegular px-5 py-[14px] rounded-lg border border-[#6F6F83]">
							데보션 영 4기 지원 하러가기
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Projectpage;
