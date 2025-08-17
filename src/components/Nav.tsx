import { A } from "@solidjs/router";
import { For } from "solid-js";
import { EMAIL } from "~/const";

const LINKS = [
	{
		label: "experience",
		to: "/experience",
	},
	{
		label: "tools",
		to: "/tools",
	},
	{
		label: "chaos",
		to: "/chaos",
	},
];

const GITHUB_LINK = "https://github.com/bynwkyow/";

export const Nav = () => {
	return (
		<nav class="py-8 flex items-center gap-4 animate-slide-down">
			<A class="shrink-0 select-none hidden sm:block" href="/">
				<img alt="Bynwkyow branding" src="/logo.webp" width="38" height="38" />
			</A>
			<ul class="flex flex-1 self-stretch items-center justify-center sm:justify-start px-2 sm:px-24 gap-14">
				<For each={LINKS}>
					{(link) => (
						<A
							class="font-display text-xl underline underline-offset-5 decoration-1 drop-shadow-xs drop-shadow-current hover:underline-offset-8 transition-all hover:text-blue-300"
							activeClass="text-blue-400 -translate-y-0.5"
							href={link.to}
						>
							{link.label}
						</A>
					)}
				</For>
			</ul>
			<div class="ms-auto px-auto justify-center gap-8 hidden md:flex lg:w-[500px] 2xl:w-[600px]">
				<a
					class="transition-all hover:scale-110"
					target="_blank"
					rel="noopener noreferrer"
					href={GITHUB_LINK}
				>
					<svg
						width="24"
						height="25"
						viewBox="0 0 24 25"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Github icon</title>
						<path
							d="M7.02399 2.81C7.7753 3.06353 8.48982 3.41525 9.14899 3.856C10.0805 3.61757 11.0384 3.49796 12 3.5C12.993 3.5 13.951 3.624 14.849 3.855C15.5079 3.41467 16.2221 3.0633 16.973 2.81C17.67 2.573 18.663 2.189 19.253 2.842C19.653 3.286 19.753 4.03 19.824 4.598C19.904 5.232 19.923 6.058 19.713 6.878C20.516 7.915 21 9.152 21 10.5C21 12.542 19.894 14.315 18.257 15.543C17.4688 16.1259 16.5951 16.5833 15.667 16.899C15.881 17.389 16 17.931 16 18.5V21.5C16 21.7652 15.8946 22.0196 15.7071 22.2071C15.5196 22.3946 15.2652 22.5 15 22.5H8.99999C8.73477 22.5 8.48041 22.3946 8.29288 22.2071C8.10534 22.0196 7.99999 21.7652 7.99999 21.5V20.509C7.04499 20.626 6.24399 20.522 5.56299 20.233C4.85099 19.931 4.35499 19.463 3.98199 19.015C3.62799 18.591 3.24199 17.635 2.68399 17.449C2.55936 17.4075 2.44413 17.3419 2.34487 17.2558C2.24562 17.1698 2.16427 17.0651 2.1055 16.9476C1.98678 16.7104 1.96718 16.4357 2.05099 16.184C2.13479 15.9323 2.31515 15.7242 2.55239 15.6055C2.78962 15.4868 3.06429 15.4672 3.31599 15.551C3.98199 15.773 4.41599 16.253 4.71299 16.639C5.19299 17.259 5.58299 18.069 6.34299 18.392C6.65599 18.525 7.11499 18.612 7.83299 18.514L7.99999 18.48C8.00229 17.9358 8.1156 17.3979 8.33299 16.899C7.40486 16.5833 6.53118 16.1259 5.74299 15.543C4.10599 14.315 2.99999 12.543 2.99999 10.5C2.99999 9.154 3.48299 7.918 4.28399 6.882C4.07399 6.062 4.09199 5.234 4.17199 4.599L4.17699 4.561C4.24999 3.979 4.33499 3.294 4.74299 2.842C5.33299 2.189 6.32698 2.574 7.02298 2.811L7.02399 2.81Z"
							fill="white"
						/>
					</svg>
				</a>
			</div>
			<a
				class="absolute hidden sm:flex right-8 bg-white text-black py-2.5 px-5 rounded-lg font-display font-medium text-xl"
				href={`mailto:${EMAIL}`}
			>
				Contact Me
			</a>
		</nav>
	);
};
