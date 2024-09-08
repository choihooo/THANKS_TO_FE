import { useState, useRef, useEffect } from 'react';
import { CaretDown } from '@phosphor-icons/react';

type Option = '1기' | '2기' | '3기' | '4기';

export const DropDown = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [selectedOption, setSelectedOption] = useState<Option>('1기');
	const options: Option[] = ['1기', '2기', '3기', '4기'];
	const dropdownRef = useRef<HTMLDivElement | null>(null);

	const toggleDropdown = (): void => setIsOpen((prev) => !prev);

	const handleOptionClick = (option: Option): void => {
		setSelectedOption(option);
		setIsOpen(false);
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent): void => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<div className="relative" ref={dropdownRef}>
			<div
				onClick={toggleDropdown}
				className="bg-[#0A1830] border-[1px] border-[#14243F] px-[13px] py-[7px] rounded cursor-pointer"
			>
				<div className="flex space-x-1 items-center">
					<span className="font-sktRegular text-sm text-white">
						{selectedOption}
					</span>
					<CaretDown size={16} color="#FFFFFF" />
				</div>
			</div>
			{isOpen && (
				<ul className="absolute mt-1 w-full bg-[#0A1830] border-[1px] border-[#14243F] rounded shadow-lg">
					{options.map((option) => (
						<li
							key={option}
							className="px-[13px] py-[7px] hover:bg-[#14243F] cursor-pointer font-sktRegular text-sm text-white"
							onClick={() => handleOptionClick(option)}
						>
							{option}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
