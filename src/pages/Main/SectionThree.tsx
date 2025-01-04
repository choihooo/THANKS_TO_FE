import { useEffect } from 'react';

const SectionThree = () => {
	useEffect(() => {
		const targetElements = document.querySelectorAll('.animate-target');

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.remove('opacity-0');
						entry.target.classList.add('opacity-100', 'animate-fadeInDown');
					}
				});
			},
			{
				threshold: 0.2,
			},
		);

		targetElements.forEach((element) => {
			observer.observe(element);
		});

		return () => {
			targetElements.forEach((element) => observer.unobserve(element));
		};
	}, []);

	return (
		<div className="w-[100%] h-[calc(100%-74px)] flex justify-center items-center flex-col">
			<div className="text-[36px]">Partnership</div>
			<div className="mt-[12px] text-[18px]">
				데보션과 함께 성장하는 파트너사를 소개합니다.
			</div>
			<div className="flex w-[1332px] h-[332px] gap-[12px] relative mt-[120px]">
				<div className="w-[274px] h-[274px] rounded-[10px] border border-[#4B5D79] bg-[rgba(7,19,41,0.5)] flex flex-col items-center justify-center absolute left-0 top-0 opacity-0 transition-opacity duration-500 animate-target">
					<img src="/images/logos/kusithm.svg" alt="한국대학생IT경영학회"></img>
					<div className="mt-[35px]">한국대학생IT경영학회</div>
				</div>
				<div className="w-[274px] h-[274px] rounded-[10px] border border-[#4B5D79] bg-[rgba(7,19,41,0.5)] flex flex-col items-center justify-center absolute left-[26%] bottom-0 opacity-0 transition-opacity duration-500 animate-target">
					<img
						src="/images/logos/kubernates.svg"
						alt="Kubernetes Korea Group"
					></img>
					<div className="mt-[35px]">Kubernetes Korea Group</div>
				</div>
				<div className="w-[274px] h-[274px] rounded-[10px] border border-[#4B5D79] bg-[rgba(7,19,41,0.5)] flex flex-col items-center justify-center absolute right-[26%] top-0 opacity-0 transition-opacity duration-500 animate-target">
					<img src="/images/logos/guruem.svg" alt="구름톤 유니브"></img>
					<div className="mt-[54px]">구름톤 유니브</div>
				</div>
				<div className="w-[274px] h-[274px] rounded-[10px] border border-[#4B5D79] bg-[rgba(7,19,41,0.5)] flex flex-col items-center justify-center absolute right-0 bottom-0 opacity-0 transition-opacity duration-500 animate-target">
					<img src="/images/logos/cpp.svg" alt="C++ Korea"></img>
					<div className="mt-[35px]">C++ Korea</div>
				</div>
			</div>
		</div>
	);
};

export default SectionThree;
