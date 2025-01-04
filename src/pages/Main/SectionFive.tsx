import ReviewSwiper from '@/components/Reviews/ReviewSwiper';

const SectionFive = () => {
	return (
		<div className="w-[100%] h-[calc(100%-74px)] flex justify-center items-center flex-col">
			<div className="text-[36px]">Review</div>
			<div className="text-[18px] mt-[12px]">
				데보션 교육 프로그램을 경험한 이전 기수 수료생들의 생생한 후기
			</div>
			<ReviewSwiper />
		</div>
	);
};

export default SectionFive;
