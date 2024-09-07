import { CaretRight } from '@phosphor-icons/react';

export const InfoSection = () => {
	return (
		<section className="mb-[69px]">
			<div className="font-sktBold text-lg mb-6">Devocean 프로젝트</div>
			<div className="flex space-x-4">
				<div className="cursor-pointer flex-col justify-end w-[220px] border border-[#6F6F83] rounded-2xl px-5 pt-8 pb-[70px] space-y-[10px]">
					<div className="flex items-center justify-between font-sktBold text-lg">
						데보션 영{' '}
						<span className="pb-1">
							<CaretRight size={26} color="#6F6F82" />
						</span>
					</div>
					<div className="font-sktRegular text-sm text-[#A2A2AF] leading-4 space-y-2">
						<p>데보션 영 멤버들의</p>
						<p>프로젝트 보러가기</p>
					</div>
				</div>
				<div className="cursor-pointer flex-col justify-end w-[220px] border border-[#6F6F83] rounded-2xl px-5 py-8 space-y-[10px]">
					<div className="flex items-center justify-between font-sktBold text-[24px]">
						OpenLab{' '}
						<span className="pb-1">
							<CaretRight size={26} color="#6F6F82" />
						</span>
					</div>
					<div className="font-sktRegular text-sm text-[#A2A2AF] leading-4 space-y-2">
						<p>오픈랩 AI 스터디에서</p>
						<p>제작한 프로젝트 보러가기</p>
					</div>
				</div>
			</div>
		</section>
	);
};
