import {
	binhan,
	binhan1,
	binhan2,
	binhan3,
	binhan4,
	haophat,
	haophat1,
	haophat2,
	satavan,
	satavan1,
	satavan2,
	satavan3,
} from "@/assets";
import classNames from "classnames";

const projectDescrStyle = "text-white line-clamp-4";

export const PROJECTLIST = [
	{
		images: [binhan, binhan1, binhan2, binhan3, binhan4],
		name: "Binhan Pharmacy",
		github: "https://github.com/nguyen-thanh-luann/binhan-pharmacy",
		demo: "https://duocbinhan.vn",
		description: (
			<div>
				<p className={classNames(projectDescrStyle)}>
					This is a modern e-commerce website built using Next.js, designed to provide users with a
					seamless shopping experience. It showcases a wide range of products, including
					best-sellers, trending items, and highly searched products.
				</p>
			</div>
		),
	},
	{
		images: [haophat, haophat1, haophat2],
		name: "HaoPhat Service",
		demo: "https://haophat.com",
		github: "https://github.com/nguyen-thanh-luann/HaophatService",
		description: (
			<div>
				<p className={classNames(projectDescrStyle)}>
					This is a modern e-commerce website built using Next.js, designed to provide users with a
					seamless shopping experience. It showcases a wide range of products, including
					best-sellers, trending items, and highly searched products.
				</p>
			</div>
		),
	},
	{
		images: [satavan, satavan1, satavan2, satavan3],
		name: "Satavan Landing Page",
		demo: "https://satavan.com",
		github: "https://github.com/nguyen-thanh-luann/satavan-lading-page",
		description: (
			<div>
				<p className={classNames(projectDescrStyle)}>
					The Landing page of Satavan. Introduce the {`company's`} services, information and parners
				</p>
			</div>
		),
	},
];
