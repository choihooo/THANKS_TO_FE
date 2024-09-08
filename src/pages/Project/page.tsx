import { CaretRight } from '@phosphor-icons/react';
import { DevoceanYoungSection } from './container/DevoceanYoungSection';
import { OpenLabSection } from './container/OpenLabSection';
import { useRef } from 'react';

const Projectpage = () => {
	const devocean_ref = useRef<HTMLDivElement>(null);
	const openlab_ref = useRef<HTMLDivElement>(null);

	const gotoDevocean = () => {
		if (devocean_ref.current) {
			const yOffset = -100; // 원하는 오프셋 (예: 헤더 높이 + 추가 여백)
			const element = devocean_ref.current;
			const y =
				element.getBoundingClientRect().top + window.pageYOffset + yOffset;

			window.scrollTo({ top: y, behavior: 'smooth' });
		}
	};

	const gotoOpenlab = () => {
		if (openlab_ref.current) {
			const yOffset = -100; // 원하는 오프셋 (예: 헤더 높이 + 추가 여백)
			const element = openlab_ref.current;
			const y =
				element.getBoundingClientRect().top + window.pageYOffset + yOffset;

			window.scrollTo({ top: y, behavior: 'smooth' });
		}
	};

	return (
		<div className="flex flex-col items-center pt-[138px] pb-[181px] w-full">
			<section className="mb-[69px] mr-[560px] animate-fadeout max-w-[1020px]">
				<div className="font-sktBold text-lg mb-6">Devocean 프로젝트</div>
				<div className="flex space-x-4">
					<div
						onClick={gotoDevocean}
						className="cursor-pointer flex-col justify-end w-[220px] border border-[#6F6F83] rounded-2xl px-5 pt-8 pb-[70px] space-y-[10px]"
					>
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
					<div
						onClick={gotoOpenlab}
						className="cursor-pointer flex-col justify-end w-[220px] border border-[#6F6F83] rounded-2xl px-5 py-8 space-y-[10px]"
					>
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
			<DevoceanYoungSection ref={devocean_ref} type="devocean" />
			<OpenLabSection ref={openlab_ref} type="openlab" />
		</div>
	);
};

export default Projectpage;
