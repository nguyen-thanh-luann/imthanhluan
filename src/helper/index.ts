import { useEffect, useState } from "react";

export const useScrollToSection = (sectionId: string) => {
	const element = document.getElementById(sectionId);
	if (element) {
		element.scrollIntoView({ behavior: "smooth" });
	}
};

export const useScrollTop = () => {
	const [height, setHeight] = useState<number>(0);

	useEffect(() => {
		const getHeight = () => setHeight(document.documentElement.scrollTop);
		window.addEventListener("scroll", getHeight);

		return () => window.removeEventListener("scroll", getHeight);
	}, []);

	return height;
};
