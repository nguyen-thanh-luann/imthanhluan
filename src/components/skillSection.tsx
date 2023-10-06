import { SKILL_LIST, SKILL_SECTION_ID } from "@/constants";
import classNames from "classnames";
import Fade from "react-reveal/Fade";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

interface SkillSectionProps {
	className?: string;
}

export const SkillSection = ({ className }: SkillSectionProps) => {
	return (
		<div
			id={SKILL_SECTION_ID}
			className={classNames("py-12 border-b-2 border-gray-900", className)}
		>
			<Fade right>
				<p className="text-blue-950 dark:text-blue-300 text-xl sm:text-2xl md:text-4xl mb-8 text-center font-bold">
					Skills
				</p>
			</Fade>

			<div>
				<Swiper
					slidesPerView={8}
					spaceBetween={24}
					grabCursor={true}
					slidesPerGroup={1}
					navigation={true}
					pagination={{
						clickable: true,
					}}
					loop={true}
					autoplay={{
						delay: 5000,
						disableOnInteraction: false,
					}}
					modules={[Autoplay, Pagination, Navigation]}
					breakpoints={{
						300: {
							slidesPerView: 3.5,
						},
						768: {
							slidesPerView: 6,
						},
						1024: {
							slidesPerView: 8,
						},
					}}
				>
					{SKILL_LIST?.map((image, index) => (
						<SwiperSlide key={index}>
							<Image
								src={image}
								alt="skill image"
								className="object-cover w-full aspect-auto mix-blend-color-burn"
								unoptimized
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};
