import {
	aiprint,
	aiprint1,
	aiprint2,
	aiprint3,
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

const projectDescrStyle = "text-white line-clamp-5";

export const PROJECTLIST = [
	{
		images: [binhan, binhan1, binhan2, binhan3, binhan4],
		name: "Binhan Pharmacy",
		github: "https://github.com/nguyen-thanh-luann/binhan-pharmacy",
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
		images: [aiprint, aiprint1, aiprint2, aiprint3],
		name: "Aiprint",
		github: "",
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
		github: "https://github.com/nguyen-thanh-luann/satavan-lading-page",
		description: (
			<div>
				<p className={classNames(projectDescrStyle)}>
					The Landing page of Satavan. Introduce the company's services, information and parners
				</p>
			</div>
		),
	},
];
