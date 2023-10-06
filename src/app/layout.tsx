import "../styles/index.scss";
import "react-tooltip/dist/react-tooltip.css";
import type { Metadata } from "next";
import classNames from "classnames";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Nguyen Thanh Luan",
	description: "Welcome to my porfolio!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={classNames(inter.className, "bg-white dark:bg-black")}>{children}</body>
		</html>
	);
}
