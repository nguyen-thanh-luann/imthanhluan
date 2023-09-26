"use client";

import {
	AboutSection,
	ContactSection,
	ExperienceSection,
	Header,
	ProjectsSection,
	ScrollToTopButton,
	WelcomeSection,
} from "@/components";

export default function Home() {
	return (
		<main className="min-h-screen container">
			<Header className="my-4" />
			<WelcomeSection />
			<ExperienceSection />
			<ProjectsSection />
			<AboutSection />
			<ContactSection />

			<ScrollToTopButton />
		</main>
	);
}
