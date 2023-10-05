import React from "react";
import classNames from "classnames";
import Fade from "react-reveal/Fade";
import Link from "next/link";
import { RESUME_LINK } from "@/constants";

interface WelcomeSectionProps {
	className?: string;
}

export const WelcomeSection = ({ className }: WelcomeSectionProps) => {
	return (
		<div
			className={classNames(
				"min-h-[400px] py-4 border-b-2 border-gray-900 flex flex-col items-center justify-center",
				className
			)}
		>
			<Fade bottom>
				<p className="text-gray-800 dark:text-white text-xl sm:text-2xl md:text-4xl mb-4 text-center font-bold">
					Hello,
				</p>
			</Fade>

			<Fade bottom>
				<p className="text-gray-800 dark:text-white text-xl sm:text-2xl md:text-4xl text-center mb-4 font-bold">
					{`I'm`}

					<span className="text-blue-950 dark:text-blue-300"> Nguyen Thanh Luan</span>
				</p>
			</Fade>

			<Fade bottom>
				<p className="text-gray-800 dark:text-white text-lg sm:text-xl md:text-xl mb-4 text-center">
					{`Welcome to my portfolio - I'm a web developer`}
				</p>
			</Fade>

			<Fade right>
				<Link
					href={RESUME_LINK}
					target="_blank'"
					className="rounded-lg bg-blue-200 px-4 py-2 font-bold hover:bg-blue-300 duration-200 ease-linear"
				>
					My resume
				</Link>
			</Fade>
		</div>
	);
};
