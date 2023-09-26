"use-client";

import {
	ABOUT_SECTION_ID,
	CONTACT_SECTION_ID,
	EXPERIENCE_SECTION_ID,
	PROJECT_SECTION_ID,
} from "@/constants";
import classNames from "classnames";
import Fade from "react-reveal/Fade";

interface HeaderProps {
	className?: string;
}

export const Header = ({ className }: HeaderProps) => {
	const navOptions = [
		{
			id: EXPERIENCE_SECTION_ID,
			title: "Experience",
		},
		{
			id: PROJECT_SECTION_ID,
			title: "Projects",
		},
		{
			id: ABOUT_SECTION_ID,
			title: "About",
		},

		{
			id: CONTACT_SECTION_ID,
			title: "Contact",
		},
	];

	const hanldeClick = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<header
			className={classNames(
				className,
				"w-full flex flex-wrap gap-2 items-center justify-evenly bg-gray-900 p-4 rounded-lg"
			)}
		>
			{navOptions.map((option, index) => (
				<div key={index} className="cursor-pointer" onClick={() => hanldeClick(option.id)}>
					<Fade right>
						<p className="text-white font-bold text-sm sm:text-base md:text-lg">{option.title}</p>
					</Fade>
				</div>
			))}
		</header>
	);
};
