import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import ReviewBox from './ReviewBox';
import * as reviewsData from './reviews.json'; // JSON 파일 가져오기
import './slick-custom.css'; // 커스텀 CSS 파일 임포트

// 리뷰 데이터에 대한 타입 정의
interface Review {
	title: string;
	content: string;
	author: {
		name: string;
		batch: string;
	};
}

function ReviewSwiper() {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 4, // 한 번에 4개의 슬라이드를 보여줌
		slidesToScroll: 1,
		autoplay: true,
		speed: 10000, // 슬라이드 전환 애니메이션 속도
		autoplaySpeed: 0, // 자동 전환 속도
		cssEase: 'linear',
		arrows: false,
	};

	const [reviews, setReviews] = useState<Review[]>([]);

	// JSON 데이터를 불러와서 상태에 저장
	useEffect(() => {
		setReviews(reviewsData.logs as Review[]);
	}, []);

	return (
		<div className="relative flex justify-center items-center h-[274px] mt-[120px]">
			<div className="custom-gradient-overlay"></div>
			<Slider {...settings} className="custom-slick-list">
				{reviews.map((review, index) => (
					<div
						key={index}
						className="flex items-center justify-center h-[400px] w-[370px]"
					>
						<ReviewBox
							title={review.title}
							content={review.content}
							author={review.author.name}
							batch={review.author.batch}
						/>
					</div>
				))}
			</Slider>
		</div>
	);
}

export default ReviewSwiper;
