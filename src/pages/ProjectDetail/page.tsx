import { getProjectDetail } from '@/apis/getProject';
import { List } from '@phosphor-icons/react';
import { useQuery } from '@tanstack/react-query';
import { Viewer } from '@toast-ui/react-editor';
import { useNavigate, useParams } from 'react-router-dom';

type ParamsType = {
	id: string;
};

export const ProjectDetailPage = () => {
	const { id } = useParams() as ParamsType;
	const { data, isFetching } = useQuery({
		queryKey: ['project-detail'],
		queryFn: () => getProjectDetail(Number(id)),
	});

	const navigate = useNavigate();
	const gotoBack = () => {
		navigate('/project');
	};
	return (
		<>
			{isFetching ? (
				<div>로딩중</div>
			) : (
				<div className="flex flex-col items-center py-[127px]">
					<div className="relative bg-[#010713] border-2 border-[#293652] rounded-[10px] max-w-[1020px]">
						<div className="absolute top-0 min-w-[1016px] h-[120px] py-[42px] px-[66px] border-b-2 border-[#293652] rounded-t-[10px] bg-gradient-to-b from-[rgba(1, 7, 19, 0.80)] to-[rgba(9, 23, 49, 0.80)]]">
							<div className="font-sktRegular text-lg">{data?.title}</div>
						</div>
						<div className="mt-[200px] mb-[126px] mx-[136px]">
							<Viewer initialValue={data?.content} />
						</div>
						<div
							onClick={gotoBack}
							className="absolute right-0 cursor-pointer px-[22px] py-2 mt-5 mb-16 flex w-[137px] border-[1px] border-[#293652] rounded-lg bg-[#1A1F2A] opacity-60 hover:opacity-70"
						>
							<List size={20} />
							<div className="font-sktRegular text-[16px] ml-2">목록보기</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
