import { getProject } from '@/apis/getProject';
import { ProjectCard } from '@/components/Project/ProjectCard';
import { CaretRight } from '@phosphor-icons/react';
import { useQuery } from '@tanstack/react-query';
import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

type DevoceanYoungSectionProps = {
	type: string;
};

export const DevoceanYoungSection = forwardRef<
	HTMLDivElement,
	DevoceanYoungSectionProps
>(({ type }, ref) => {
	console.log(type);
	const { data } = useQuery({
		queryKey: ['project-devocean-data'],
		queryFn: () => getProject('DEVOCEAN_YOUNG'),
	});

	return (
		<div ref={ref} className="mb-[194px] animate-fadeout max-w-[1020px]">
			<div className="mb-10">
				<div className="flex mb-[29px]">
					<div className="font-sktBold text-lg mb-6">데보션 영</div>
				</div>
				<div className="flex justify-between items-center">
					<div className="font-sktRegular text-[16px]">
						데보션 영(Devocean Young)은 SK텔레콤의 개발자 커뮤니티인
						데보션(Devocean)에서 운영하는 프로그램으로, <br />
						주로 젊은 개발자들이 참여하여 기술적 역량을 키우고 다양한 프로젝트에
						참여할 수 있는 기회를 제공합니다.
					</div>
					<div className="cursor-pointer flex items-center gap-[10px] px-5 py-[14px] rounded-lg border border-[#6F6F83] bg-[rgba(255,255,255,0.10)] hover:bg-[rgba(255,255,255,0.12)]">
						<div className="font-sktRegular text-sm">
							데보션 영 4기 지원 하러가기
						</div>
						<span>
							<CaretRight size={14} color="#6F6F82" />
						</span>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-3 gap-[18px]">
				{data
					?.slice(0, 6)
					.map((devocean) => (
						<ProjectCard key={devocean.project_id} project={devocean} />
					))}
			</div>
			<div className="cursor-pointer flex items-center justify-end gap-[3px] pt-3">
				<Link
					to={'/project/all?DEVOCEAN_YOUNG'}
					className="font-sktRegular text-sm text-[#9F9FA8]"
				>
					전체보기
				</Link>
				<span>
					<CaretRight size={14} color="#9F9FA8" />
				</span>
			</div>
		</div>
	);
});
