import clsx from "clsx";
import { DOWNLOAD_URL, GITHUB_URL } from "~/const";

export default function Chaos() {
	return (
		<>
			<span class="font-display select-none font-bold text-5xl animate-fade-in">
				<span class="text-black">Chaos</span>
				<br />
				<span class="text-black/30">Skin Manager</span>
			</span>

			<div class="flex flex-col mt-auto gap animate-fade-in">
				<img
					class="select-none"
					width="138"
					height="138"
					src="/chaos.png"
					alt="Chaos branding"
				/>

				<span class="font-display max-w-[700px] pt-6 font-medium text-2xl text-black overflow-hidden">
					Chaos is a custom skin manager for League of Legends, allowing users
					to easily browse, install, and manage community-made skins. Designed
					for performance and simplicity, Chaos enhances the player experience
					without modifying core game files.
				</span>
				<div class="mt-8 flex gap-3">
					<a
						href={DOWNLOAD_URL}
						class="bg-neutral-700 drop-shadow active:translate-y-0.5 transition-all duration-100 hover:bg-neutral-700/80 flex items-center px-5 gap-2.5 py-2.5 rounded-lg"
					>
						<svg
							width="26"
							height="27"
							viewBox="0 0 26 27"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>Plus icon</title>
							<path
								opacity="0.3"
								d="M13 24.3334C18.9831 24.3334 23.8333 19.4831 23.8333 13.5C23.8333 7.51694 18.9831 2.66669 13 2.66669C7.01692 2.66669 2.16667 7.51694 2.16667 13.5C2.16667 19.4831 7.01692 24.3334 13 24.3334Z"
								fill="white"
							/>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M11.9167 12.4167V8.08333C11.9167 7.48502 12.4017 7 13 7C13.5983 7 14.0833 7.48502 14.0833 8.08333V12.4167H18.4167C19.015 12.4167 19.5 12.9017 19.5 13.5C19.5 14.0983 19.015 14.5833 18.4167 14.5833H14.0833V18.9167C14.0833 19.515 13.5983 20 13 20C12.4017 20 11.9167 19.515 11.9167 18.9167V14.5833H7.58333C6.98502 14.5833 6.5 14.0983 6.5 13.5C6.5 12.9017 6.98502 12.5833 7.58333 12.5833H11.9167Z"
								fill="white"
							/>
						</svg>
						<span class="font-display text-xl font-medium">Download</span>
					</a>
					<a
						href={GITHUB_URL}
						target="_blank"
						rel="noopener noreferrer"
						class={clsx(
							"border cursor-pointer group hover:text-white text-black border-neutral-700 active:translate-y-0.5 transition-all duration-100 hover:bg-neutral-800 flex items-center px-5 gap-2.5 py-2.5 rounded-lg",
						)}
					>
						<svg
							width="22"
							height="22"
							viewBox="0 0 22 22"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="group-hover:invert-100"
						>
							<title>Chaos grayscale icon</title>
							<g clip-path="url(#clip0_4_422)">
								<path
									d="M21.9697 11.825H18.0402C14.6077 11.825 11.8252 14.6075 11.8252 18.04V21.9695C17.2426 21.5678 21.568 17.2424 21.9697 11.825Z"
									fill="#686868"
								/>
								<path
									d="M10.1752 21.9695V18.04C10.1752 14.6075 7.39263 11.825 3.96017 11.825H0.0306396C0.432323 17.2424 4.75772 21.5678 10.1752 21.9695Z"
									fill="#686868"
								/>
								<path
									d="M21.9697 10.1749C21.568 4.75748 17.2426 0.432079 11.8252 0.0303955V3.95992C11.8252 7.39238 14.6077 10.1749 18.0402 10.1749H21.9697Z"
									fill="#686868"
								/>
								<path
									d="M10.1752 0.0303955C4.75772 0.432079 0.432323 4.75748 0.0306396 10.1749H3.96017C7.39263 10.1749 10.1752 7.39238 10.1752 3.95992V0.0303955Z"
									fill="#686868"
								/>
								<path
									d="M7.4707 10.9999C8.99558 10.2379 10.2383 8.99521 11.0002 7.47034C11.7621 8.99521 13.0047 10.2379 14.5297 10.9999C13.0047 11.7617 11.7621 13.0044 11.0002 14.5293C10.2383 13.0044 8.99558 11.7617 7.4707 10.9999Z"
									fill="black"
								/>
							</g>
							<defs>
								<clipPath id="clip0_4_422">
									<rect width="22" height="22" fill="white" />
								</clipPath>
							</defs>
						</svg>

						<span class="font-display text-xl font-medium transition-colors">
							Learn More
						</span>
					</a>
				</div>
			</div>
		</>
	);
}
