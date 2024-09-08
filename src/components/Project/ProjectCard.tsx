import { Project } from '@/apis/getProject';
import { useNavigate } from 'react-router-dom';

interface ProjectCardProps {
	project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
	const navigate = useNavigate();
	const gotoProjectDetail = (id: number) => {
		navigate(`/project/${id}`);
	};
	return (
		<div
			className="cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
			onClick={() => gotoProjectDetail(project.project_id)}
		>
			<img
				src={project.thumbnail}
				alt="devocean_project"
				className="w-[328px] h-[206px] rounded-t-[8px] border-[1px] border-[#293652]"
			/>
			<div className="h-[105px] rounded-b-[8px] bg-[#071329] border-[1px] border-[#293652]">
				<div className="font-sktRegular p-[25px]">{project.title}</div>
			</div>
		</div>
	);
};
