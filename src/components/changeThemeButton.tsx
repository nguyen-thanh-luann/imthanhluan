"use client";

import { MoonIcon, SunIcon } from "@/assets";
import { setDarkTheme, setLightTheme } from "@/helper";
import React, { useEffect, useState } from "react";

export const ChangeThemeButton = () => {
	const [theme, setTheme] = useState<string>();

	useEffect(() => {
		if (
			localStorage.theme === "dark" ||
			(!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			document.documentElement.classList.add("dark");
			setTheme("dark");
		} else {
			document.documentElement.classList.remove("dark");
			setTheme("light");
		}
	}, []);

	const onThemeSwitcherItemClick = () => {
		if (theme === "dark") {
			setLightTheme();
			setTheme("light");
		} else {
			setDarkTheme();
			setTheme("dark");
		}
	};

	return (
		<div className="flex items-center gap-4">
			<div className="cursor-pointer" onClick={onThemeSwitcherItemClick}>
				{theme === "dark" ? (
					<SunIcon className="w-[30px] h-[30px] text-yellow-500" />
				) : (
					<MoonIcon className="w-[30px] h-[30px] text-gray-800" />
				)}
			</div>
		</div>
	);
};
