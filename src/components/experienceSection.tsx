import { EXPERIENCES, EXPERIENCE_SECTION_ID } from "@/constants";
import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";
import Fade from "react-reveal/Fade";

interface ExperienceSectionProps {
	className?: string;
}

export const ExperienceSection = ({ className }: ExperienceSectionProps) => {
	const [activeDataIndex, setActiveDataIndex] = useState<number>(0);

	return (
		<div
			id={EXPERIENCE_SECTION_ID}
			className={classNames("min-h-[400px] py-12 border-b-2 border-gray-900", className)}
		>
			<Fade right>
				<p className="text-blue-950 dark:text-blue-300 text-xl sm:text-2xl md:text-4xl mb-8 text-center font-bold">
					Experience
				</p>
			</Fade>

			<div className="flex flex-wrap gap-8">
				<div className="w-full md:w-[200px] overflow-scroll scrollbar-hide flex flex-row md:flex-col">
					{EXPERIENCES.map((item, index) => (
						<div
							onClick={() => {
								setActiveDataIndex(index);
							}}
							key={index}
							className={classNames(
								"p-4 cursor-pointer border-b-2 duration-200 ease-linear",
								index === activeDataIndex
									? "bg-gray-900  border-blue-300"
									: "border-black dark:bg-gray-950 bg-gray-700 text-black dark:text-white hover:border-blue-300"
							)}
						>
							<p className="text-white">{item?.title}</p>
						</div>
					))}
				</div>

				<div className="flex-1 p-2">
					{EXPERIENCES?.map((item, index) => (
						<Fade right key={index}>
							<div className={classNames(activeDataIndex === index ? "block" : "hidden")}>
								<p className="font-bold text-gray-800 dark:text-white text-lg mb-4">
									{item.position}{" "}
									<Link
										href={item?.company_link}
										target="_blank"
										className="text-blue-800 dark:text-blue-300"
									>
										@{item?.company}
									</Link>
								</p>

								<p className="text-gray-800 dark:text-white text-sm mb-4">{item?.duration}</p>

								{item?.description}
							</div>
						</Fade>
					))}
				</div>
			</div>
		</div>
	);
};
