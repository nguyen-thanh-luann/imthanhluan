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
		<main className="min-h-screen">
			<Header className="mb-4" />

			<div className="container">
				<WelcomeSection />
				<ExperienceSection />
				<ProjectsSection />
				<AboutSection />
				<ContactSection />

				<ScrollToTopButton />
			</div>
		</main>
	);
}
