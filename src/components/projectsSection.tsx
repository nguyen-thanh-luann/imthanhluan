import { PROJECTLIST, PROJECT_SECTION_ID } from "@/constants";
import classNames from "classnames";
import Link from "next/link";
import Fade from "react-reveal/Fade";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { GithubCircelIcon } from "@/assets";

interface ProjectsSectionProps {
	className?: string;
}

export const ProjectsSection = ({ className }: ProjectsSectionProps) => {
	return (
		<div
			id={PROJECT_SECTION_ID}
			className={classNames("min-h-[400px] py-12 border-b-2 border-gray-900", className)}
		>
			<Fade right>
				<p className="text-blue-300 text-xl sm:text-2xl md:text-4xl mb-4 text-center font-bold">
					Projects
				</p>
			</Fade>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
				{PROJECTLIST?.map((item, index) => (
					<Fade right key={index}>
						<div className="bg-gray-900 rounded-xl">
							<div>
								<Swiper
									slidesPerView={1}
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
								>
									{item?.images?.map((image, index) => (
										<SwiperSlide key={index}>
											<Image
												src={image}
												alt="project image"
												className="object-cover w-full aspect-auto rounded-tl-xl rounded-tr-xl"
											/>
										</SwiperSlide>
									))}
								</Swiper>
							</div>

							<div className="p-4">
								<p className="text-white text-xl mb-4 font-bold">{item?.name}</p>

								<div className="mb-4">{item?.description}</div>

								<div className="flex items-center justify-center">
									{item?.github && (
										<Link href={item?.github} target="_blank">
											<GithubCircelIcon className="text-blue-300 w-[32px] h-[32px] hover:scale-110 duration-150 ease-linear" />
										</Link>
									)}
								</div>
							</div>
						</div>
					</Fade>
				))}
			</div>
		</div>
	);
};
