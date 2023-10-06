import {
	EmailIconOutline,
	GithubCircelIcon,
	LinkedInIconOutline,
	SkypeIcon,
	TelegramIconOutline,
	ZaloIcon,
} from "@/assets";
import { CONTACT_SECTION_ID } from "@/constants";
import classNames from "classnames";
import Link from "next/link";
import Fade from "react-reveal/Fade";

interface ContactSectionProps {
	className?: string;
}

export const ContactSection = ({ className }: ContactSectionProps) => {
	return (
		<div id={CONTACT_SECTION_ID} className={classNames("min-h-[300px] py-12", className)}>
			<Fade right>
				<p className="text-blue-950 dark:text-blue-300 text-xl sm:text-2xl md:text-4xl mb-8 text-center font-bold">
					Contact Me
				</p>
			</Fade>

			<div className="flex items-center gap-5 justify-center mb-12">
				<Link
					className="hover:scale-125 duration-200 ease-linear"
					href="https://github.com/nguyen-thanh-luann"
					target="_blank"
				>
					<GithubCircelIcon className="text-blue-950 dark:text-blue-300 w-[30px] h-[30px]" />
				</Link>

				<Link
					className="hover:scale-125 duration-200 ease-linear"
					href={"mailto:imthanhluan@gmail.com"}
					target="_blank"
				>
					<EmailIconOutline className="text-blue-950 dark:text-blue-300 w-[30px] h-[30px]" />
				</Link>

				<Link
					className="hover:scale-125 duration-200 ease-linear"
					href="https://www.linkedin.com/in/imthanhluann"
					target="_blank"
				>
					<LinkedInIconOutline className="text-blue-950 dark:text-blue-300 w-[30px] h-[30px]" />
				</Link>

				<Link
					className="hover:scale-125 duration-200 ease-linear"
					href="https://t.me/imthanhluan"
					target="_blank"
				>
					<TelegramIconOutline className="text-blue-950 dark:text-blue-300 w-[30px] h-[30px]" />
				</Link>

				<Link
					className="hover:scale-125 duration-200 ease-linear"
					href="https://join.skype.com/invite/xQctMfOVRhvo"
					target="_blank"
				>
					<SkypeIcon className="text-blue-950 dark:text-blue-300 w-[30px] h-[30px]" />
				</Link>

				<Link
					className="hover:scale-125 duration-200 ease-linear"
					href="https://zalo.me/0706431927"
					target="_blank"
				>
					<ZaloIcon className="text-blue-950 dark:text-blue-300 w-[30px] h-[30px]" />
				</Link>
			</div>

			<p className="text-center text-gray-800 dark:text-white">
				Made with ❤️ by <strong>Nguyen Thanh Luan</strong>
			</p>
			<p className="text-center text-blue-950 dark:text-white">@2023</p>
		</div>
	);
};
