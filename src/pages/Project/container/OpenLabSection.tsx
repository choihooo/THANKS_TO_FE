import { getProject } from '@/apis/getProject';
import { ProjectCard } from '@/components/Project/ProjectCard';
import { CaretRight } from '@phosphor-icons/react';
import { useQuery } from '@tanstack/react-query';
import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

type OpenLabSectionProps = {
	type: string;
};

export const OpenLabSection = forwardRef<HTMLDivElement, OpenLabSectionProps>(
	({ type }, ref) => {
		console.log(type);
		const { data } = useQuery({
			queryKey: ['project-openlab-data'],
			queryFn: () => getProject('OPEN_LAB'),
		});

		return (
			<div ref={ref} className="max-w-[1020px]">
				<div className="mb-10">
					<div className="flex mb-[29px]">
						<div className="font-sktBold text-lg mb-6">OpenLab</div>
					</div>
					<div className="flex justify-between items-center">
						<div className="font-sktRegular text-sm">
							데보션 OpenLab(Devocean OpenLab)은 SK텔레콤의 개발자 커뮤니티인
							데보션에서 운영하는 스터디 프로그램으로,
							<br /> 현업 전문가와 함께 다양한 주제로 스터디를 진행하여
							개발자들의 역량을 향상시키고 네트워킹을 촉진하는 것을 목표로
							합니다.
						</div>
						<div className="cursor-pointer flex items-center gap-[10px] px-5 py-[14px] rounded-lg border border-[#6F6F83] bg-[rgba(255,255,255,0.10)] hover:bg-[rgba(255,255,255,0.12)]">
							<div className="font-sktRegular text-sm">
								Open Lab 2기 지원 하러가기
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
						.map((openlab) => (
							<ProjectCard key={openlab.project_id} project={openlab} />
						))}
				</div>
				<div className="cursor-pointer flex items-center justify-end gap-[3px] pt-3 mb-[181px]">
					<Link
						to={'/project/all?OPEN_LAB'}
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
	},
);
