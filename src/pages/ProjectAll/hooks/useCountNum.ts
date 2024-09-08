import { useEffect, useState, useRef } from 'react';

function easeOutExpo(t: number): number {
	return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export default function useCountNum(end: number, start = 0, duration = 2000) {
	const [count, setCount] = useState(start);
	const countRef = useRef(start);
	const frameRate = 1000 / 60;
	const totalFrame = Math.round(duration / frameRate);

	useEffect(() => {
		let frame = 0;
		const counter = setInterval(() => {
			frame++;
			const progress = easeOutExpo(frame / totalFrame);
			const currentCount = Math.round(start + (end - start) * progress);

			if (currentCount !== countRef.current) {
				countRef.current = currentCount;
				setCount(currentCount);
			}

			if (frame === totalFrame) {
				clearInterval(counter);
			}
		}, frameRate);

		return () => clearInterval(counter);
	}, [end, start, totalFrame, frameRate]);

	return count;
}
