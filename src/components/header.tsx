"use-client";

import {
	ABOUT_SECTION_ID,
	CONTACT_SECTION_ID,
	EXPERIENCE_SECTION_ID,
	PROJECT_SECTION_ID,
	SKILL_SECTION_ID,
} from "@/constants";
import classNames from "classnames";
import Fade from "react-reveal/Fade";
import { ChangeThemeButton } from ".";
import { MenuIcon, TimesIcon } from "@/assets";
import { useModal } from "@/hooks";
import { Modal } from "./modal";

interface HeaderProps {
	className?: string;
}

export const Header = ({ className }: HeaderProps) => {
	const { visible, closeModal, toggle } = useModal();

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
			id: SKILL_SECTION_ID,
			title: "Skills",
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
		<>
			<Fade top>
				<header
					className={classNames(
						className,
						"w-full sticky z-50 top-0 flex items-center justify-between bg-white shadow-lg dark:bg-gray-900 p-4	"
					)}
				>
					<div className="">
						<div className="cursor-pointer" onClick={toggle}>
							<MenuIcon className="text-black dark:text-white w-[30px] h-[30px] block md:hidden" />
						</div>
					</div>

					<div className="gap-8 hidden md:flex">
						{navOptions.map((option, index) => (
							<div key={index} className="cursor-pointer" onClick={() => hanldeClick(option.id)}>
								<p className="text-gray-800 dark:text-white font-bold text-sm sm:text-base md:text-lg">
									{option.title}
								</p>
							</div>
						))}
					</div>
					<div className="">
						<ChangeThemeButton />
					</div>
				</header>
			</Fade>

			<Modal
				visible={visible}
				animationType="slideFromRight"
				headerClassName="hidden"
				modalClassName="h-full w-full fixed"
			>
				<div className="z-[1000]">
					<div className="cursor-pointer ms-auto w-fit p-4" onClick={toggle}>
						<TimesIcon className="text-black dark:text-white cursor-pointer " />
					</div>

					<div className="gap-8 flex flex-col items-center">
						{navOptions.map((option, index) => (
							<div
								key={index}
								className="cursor-pointer"
								onClick={() => {
									hanldeClick(option.id);
									toggle();
								}}
							>
								<p className="text-gray-800 dark:text-white font-bold text-sm sm:text-base md:text-lg">
									{option.title}
								</p>
							</div>
						))}
					</div>
				</div>
			</Modal>
		</>
	);
};
