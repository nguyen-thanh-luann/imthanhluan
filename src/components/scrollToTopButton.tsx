import { UpIcon } from "@/assets";
import { useScrollTop } from "@/helper";
import classNames from "classnames";
import React from "react";
import Fade from "react-reveal/Fade";

export const ScrollToTopButton = () => {
	const scrolledFromTop = useScrollTop();

	const onClickHandler = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<>
			<Fade bottom>
				<div
					onClick={onClickHandler}
					className={classNames(
						"bg-gray-900 rounded-full w-[50px] h-[50px] fixed bottom-12 right-12 flex items-center justify-center cursor-pointer hover:animate-bounce shadow-lg",
						scrolledFromTop > 400 ? "visible" : "hidden"
					)}
				>
					<UpIcon className="text-white w-[20px] h-[20px]" />
				</div>
			</Fade>
		</>
	);
};
