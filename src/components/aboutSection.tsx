import { avatar } from "@/assets";
import { ABOUT_SECTION_ID } from "@/constants";
import classNames from "classnames";
import Image from "next/image";
import Fade from "react-reveal/Fade";

interface AboutSectionProps {
	className?: string;
}

export const AboutSection = ({ className }: AboutSectionProps) => {
	return (
		<div
			id={ABOUT_SECTION_ID}
			className={classNames("min-h-[400px] py-12 border-b-2 border-gray-900", className)}
		>
			<Fade right>
				<p className="text-blue-950 dark:text-blue-300 text-xl sm:text-2xl md:text-4xl mb-8 text-center font-bold">
					About
				</p>
			</Fade>

			<div className="flex flex-wrap flex-col md:flex-row gap-12 items-center w-full md:w-[80%] mx-auto">
				<div className="">
					<Image
						src={avatar}
						alt="avatar"
						className="rounded-full aspect-auto w-[120px] h-[120px] object-cover"
					/>
				</div>
				<div className="flex-1">
					<p className="text-gray-800 dark:text-white mb-8 text-center md:text-start">
						{`I’m a developer from Vietnam. I am a highly motivated and enthusiastic. I can
						collaborate very well with teamates meanwhile working independently is one of my strong
						points. I am confident that I can be a valuable asset to your team.`}
					</p>

					<p className="text-gray-800 dark:text-white mb-8 text-center md:text-start">
						{`My experience is mostly about Front-end development but I also explore other fields like
						Mobile, Back-end and Computer Science.`}
					</p>

					<p className="text-gray-800 dark:text-white mb-8 text-center md:text-start">
						{`Besides from programming, I also learn more about blockchain technology, smart
						contract,... Because I think this is the future development path for my career`}
					</p>
				</div>
			</div>
		</div>
	);
};
