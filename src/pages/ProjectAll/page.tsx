import { useEffect, useState } from 'react';
import useCountNum from './hooks/useCountNum';
import { ProjectCard } from '@/components/Project/ProjectCard';
import { useQuery } from '@tanstack/react-query';
import { getProject } from '@/apis/getProject';

export const ProjectAllPage = () => {
	const params = window.location.search.slice(1);
	const [info, setInfo] = useState({
		title: '',
		active: 0,
		project: 0,
		generation: 0,
	});

	const { data } = useQuery({
		queryKey: ['project-all-data'],
		queryFn: () => getProject(params),
	});

	useEffect(() => {
		setInfo(() => {
			if (params === 'DEVOCEAN_YOUNG') {
				return {
					title: '데보션 영',
					active: 120,
					project: 40,
					generation: 4,
				};
			} else {
				return {
					title: 'OpenLab',
					active: 108,
					project: 20,
					generation: 2,
				};
			}
		});
	}, [params]);

	return (
		<div className="flex flex-col items-center pt-[138px] pb-[181px]">
			<section className="animate-fadeout max-w-[1020px]">
				<div className="font-sktRegular text-lg mb-9">{info.title}</div>
				<div className="flex-col space-y-[22px] py-9 mb-[64px] border-[1px] border-[#5C7AB8] rounded-lg h-[204px] bg-gradient-to-b from-[#010713] to-[#132645]">
					<div className="uppercase font-sktRegular text-[#4E6698] text-[16px] text-center">
						our activities
					</div>
					<div className="min-w-[975px] flex justify-center">
						<div className="w-1/3 text-center border-r-[1px] border-[#293652] space-y-2">
							<div className="text-[#5B85FF] text-[36px] font-bold">
								{useCountNum(info.active)}
							</div>
							<div className="font-sktRegular">누적 활동 인원</div>
						</div>
						<div className="w-1/3 text-center border-r-[1px] border-[#293652] space-y-2">
							<div className="text-[#5B85FF] text-[36px] font-bold">
								{useCountNum(info.project)}
							</div>
							<div className="font-sktRegular">프로젝트</div>
						</div>
						<div className="w-1/3 text-center space-y-1 ">
							<div className="text-[#5B85FF] text-[36px] font-bold">
								{useCountNum(info.generation)}
							</div>
							<div className="font-sktRegular">운영 기수</div>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-3 gap-[18px]">
					{data?.map((project) => (
						<ProjectCard key={project.project_id} project={project} />
					))}
				</div>
			</section>
		</div>
	);
};
