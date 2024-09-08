interface ReviewBoxProps {
	title: string;
	content: string;
	author: string;
	batch: string;
}

const ReviewBox: React.FC<ReviewBoxProps> = ({
	title,
	content,
	author,
	batch,
}) => {
	return (
		<div className="relative h-[274px] w-[370px] bg-[#071329] rounded-xl text-[14px] text-white px-[36px] py-[55px]">
			<div className="">{title}</div>
			<div className="mt-2">{content}</div>
			<div className="absolute bottom-10">
				<span>{author}</span>
				<span className="ml-2 text-[#BDBDBD]">({batch})</span>
			</div>
		</div>
	);
};

export default ReviewBox;
