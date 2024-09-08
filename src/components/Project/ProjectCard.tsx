export const ProjectCard = () => {
	return (
		<div className="cursor-pointer relative w-[328px] h-[310px] border-[1px] border-[#293652] bg-[#D8D9DD] rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out">
			<div className="absolute px-[29px] py-6 bottom-[-1px] border-[1px] border-[#293652] bg-[#071329] w-full h-[105px] rounded-b-lg ">
				<div className="flex justify-center items-center font-sktRegular text-sm min-w-[270px]">
					OpenLab - OpenLLM, Advanced RAG를 이용한 chatbot 구현
				</div>
			</div>
		</div>
	);
};
