
import { useLocation } from "@solidjs/router";

import clsx from "clsx";

import type { ParentProps } from "solid-js";



export const Layout = (props: ParentProps) => {

	const location = useLocation();



	return (

		<main class="flex h-full pb-3 sm:pb-8 gap-5">

			<div class="relative flex-1 min-h-[600px] flex flex-col items-start p-5 sm:p-10 bg-white lg:bg-[url(/bg.webp)] h-full bg-contain bg-right bg-no-repeat rounded-2xl">

				{props.children}

				<div

					class={clsx(

						"absolute pointer-events-none opacity-0 transition-opacity right-0 top-0 w-full h-full overflow-hidden",

						location.pathname === "/chaos" && "xl:opacity-100",

					)}

				>

					<svg

						width="22"

						height="22"

						viewBox="0 0 22 22"

						fill="none"

						xmlns="http://www.w3.org/2000/svg"

						class="rotate-[-16deg] text-black/5 h-[90vh] w-[90vh] aspect-square absolute right-[-40vh] bottom-0"

					>

						<title>Chaos grayscale icon</title>

						<g clip-path="url(#clip0_4_422)">

							<path

								d="M21.9697 11.825H18.0402C14.6077 11.825 11.8252 14.6075 11.8252 18.04V21.9695C17.2426 21.5678 21.568 17.2424 21.9697 11.825Z"

								fill="currentColor"

							/>

							<path

								d="M10.1752 21.9695V18.04C10.1752 14.6075 7.39263 11.825 3.96017 11.825H0.0306396C0.432323 17.2424 4.75772 21.5678 10.1752 21.9695Z"

								fill="currentColor"

							/>

							<path

								d="M21.9697 10.1749C21.568 4.75748 17.2426 0.432079 11.8252 0.0303955V3.95992C11.8252 7.39238 14.6077 10.1749 18.0402 10.1749H21.9697Z"

								fill="currentColor"

							/>

							<path

								d="M10.1752 0.0303955C4.75772 0.432079 0.432323 4.75748 0.0306396 10.1749H3.96017C7.39263 10.1749 10.1752 7.39238 10.1752 3.95992V0.0303955Z"

								fill="currentColor"

							/>

							<path

								d="M7.4707 10.9999C8.99558 10.2379 10.2383 8.99521 11.0002 7.47034C11.7621 8.99521 13.0047 10.2379 14.5297 10.9999C13.0047 11.7617 11.7621 13.0044 11.0002 14.5293C10.2383 13.0044 8.99558 11.7617 7.4707 10.9999Z"

								fill="currentColor"

							/>

						</g>

						<defs>

							<clipPath id="clip0_4_422">

								<rect width="22" height="22" fill="white" />

							</clipPath>

						</defs>

					</svg>

				</div>

			</div>

			<div class="hidden select-none relative lg:block lg:w-[500px] 2xl:w-[600px] h-full rounded-2xl">

				<video

					class="absolute z-20 top-0 left-0 w-full h-full object-cover rounded-2xl"


					src="/metal.webm"


					autoplay

					muted

					loop

				/>


				{/* <img


					alt="Metal gif"


					src="/metal.gif"


					loading="eager"


					style={{ opacity: 0 }}


					onLoad={(e) => {


						e.currentTarget.style.opacity = "100";


					}}


					class="absolute z-20 top-0 left-0 w-full h-full object-cover rounded-2xl"


				/>


				<img


					alt="Metal fallback webp"


					src="/metal.webp"


					class="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"


				/> */}

			</div>

		</main>

	);


};