import { useEffect, useState } from 'react';

export const ProjectAllPage = () => {
	const [title, setTitle] = useState('');

	useEffect(() => {
		const params = window.location.search.slice(1);

		setTitle(() => {
			console.log(params);
			if (params === 'devocean-young') {
				return '데보션 영';
			} else {
				return 'OpenLab';
			}
		});
	}, []);

	return (
		<div className="px-[90px] pt-[138px] pb-[181px]">
			<div className="font-sktRegular text-lg mb-9">{title}</div>
			<div className="flex-col space-y-[22px] py-9 border-[1px] border-[#5C7AB8] rounded-lg h-[204px] bg-gradient-to-b from-[#010713] to-[#132645]">
				<div className="uppercase font-sktRegular text-[#4E6698] text-[16px] text-center">
					our activities
				</div>
				<div className="min-w-[975px] flex justify-center">
					<div className="w-1/3 text-center border-r-[1px] border-[#293652] space-y-2">
						<div className="text-[#5B85FF] text-[36px] font-bold">108</div>
						<div className="font-sktRegular">누적 활동 인원</div>
					</div>
					<div className="w-1/3 text-center border-r-[1px] border-[#293652] space-y-2">
						<div className="text-[#5B85FF] text-[36px] font-bold">20</div>
						<div className="font-sktRegular">프로젝트</div>
					</div>
					<div className="w-1/3 text-center space-y-1 ">
						<div className="text-[#5B85FF] text-[36px] font-bold">3</div>
						<div className="font-sktRegular">운영 기수</div>
					</div>
				</div>
			</div>
		</div>
	);
};
