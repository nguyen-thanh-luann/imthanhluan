import "../styles/index.scss";
import "react-tooltip/dist/react-tooltip.css";
import type { Metadata } from "next";
import classNames from "classnames";
import { Inter } from "next/font/google";
import { thumbnail } from "@/assets";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	openGraph: {
		type: "website",
		url: "https://imthanhluan.vercel.app",
		title: "Nguyen Thanh Luan",
		description: "Welcome to my porfolio - I am a Website Developer",
		images: [
			{
				url: `${thumbnail?.default?.src}`,
			},
		],
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={classNames(inter.className, "bg-white dark:bg-black")}>{children}</body>
		</html>
	);
}
