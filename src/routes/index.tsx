import clsx from "clsx";
import { createSignal } from "solid-js";
import { EMAIL } from "~/const";

export default function Home() {
	const [copied, setCopied] = createSignal(false);

	return (
		<>
			<div class="flex select-none gap-3 items-center px-5 py-2 bg-green-700/80 rounded-full animate-slide-down">
				<div class="bg-green-500 rounded-full w-2 h-2 animate-ping" />
				<span class="text-xl text-green-300">Available for work</span>
			</div>
			<div class="flex flex-col mt-auto gap animate-fade-in">
				<span class="font-display flex gap-2 items-center font-bold text-5xl lg:text-4xl xl:text-5xl text-black/30">
					I’m
					<span class="text-black">Bynwkyow</span>
					<img
						alt="Bynwkyow avatar"
						width="69"
						height="69"
						src="/pfp.webp"
						class="rounded-full inline-block w-[48px] md:w-[69px] lg:w-[54px] xl:w-[69px] select-none pointer-events-none"
					/>
				</span>
				<span class="font-display text-nowrap flex gap-2 items-center font-bold text-3xl md:text-5xl lg:text-4xl xl:text-5xl text-black">
					A full-stack web <span class="text-black/30">developer</span>
				</span>
				<span class="font-display max-w-[700px] py-1 font-normal text-lg sm:text-2xl lg:text-xl xl:text-2xl text-black overflow-hidden">
					Passionate about turning ideas into fully working products, with 4
					years of experience building real-world applications that solve real
					problems and add value.
				</span>
				<div class="mt-8 flex gap-3">
					<a
						href={`mailto:${EMAIL}`}
						class="bg-neutral-700 drop-shadow active:translate-y-0.5 transition-all duration-100 hover:bg-neutral-700/80 flex px-5 gap-2.5 py-2.5 rounded-lg"
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
								d="M11.9167 12.4167V8.08333C11.9167 7.48502 12.4017 7 13 7C13.5983 7 14.0833 7.48502 14.0833 8.08333V12.4167H18.4167C19.015 12.4167 19.5 12.9017 19.5 13.5C19.5 14.0983 19.015 14.5833 18.4167 14.5833H14.0833V18.9167C14.0833 19.515 13.5983 20 13 20C12.4017 20 11.9167 19.515 11.9167 18.9167V14.5833H7.58333C6.98502 14.5833 6.5 14.0983 6.5 13.5C6.5 12.9017 6.98502 12.4167 7.58333 12.4167H11.9167Z"
								fill="white"
							/>
						</svg>
						<span class="font-display text-xl font-medium">Contact</span>
					</a>
					<button
						type="button"
						class={clsx(
							"border cursor-pointer group hover:text-white text-black border-neutral-700 active:translate-y-0.5 transition-all duration-100 hover:bg-neutral-800 flex px-5 gap-2.5 py-2.5 rounded-lg",
							copied() && "!border-green-600 text-green-600",
						)}
						onClick={() => {
							window.navigator.clipboard.writeText(EMAIL);

							setCopied(true);

							setTimeout(() => {
								setCopied(false);
							}, 1500);
						}}
					>
						<svg
							width="24"
							height="25"
							viewBox="0 0 24 25"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>Copy icon</title>
							<path
								d="M5 15.5C4.06812 15.5 3.60218 15.5 3.23463 15.3478C2.74458 15.1448 2.35523 14.7554 2.15224 14.2654C2 13.8978 2 13.4319 2 12.5V5.7C2 4.5799 2 4.01984 2.21799 3.59202C2.40973 3.21569 2.71569 2.90973 3.09202 2.71799C3.51984 2.5 4.0799 2.5 5.2 2.5H12C12.9319 2.5 13.3978 2.5 13.7654 2.65224C14.2554 2.85523 14.6448 3.24458 14.8478 3.73463C15 4.10218 15 4.56812 15 5.5M12.2 22.5H18.8C19.9201 22.5 20.4802 22.5 20.908 22.282C21.2843 22.0903 21.5903 21.7843 21.782 21.408C22 20.9802 22 20.4201 22 19.3V12.7C22 11.5799 22 11.0198 21.782 10.592C21.5903 10.2157 21.2843 9.90973 20.908 9.71799C20.4802 9.5 19.9201 9.5 18.8 9.5H12.2C11.0799 9.5 10.5198 9.5 10.092 9.71799C9.71569 9.90973 9.40973 10.2157 9.21799 10.592C9 11.0198 9 11.5799 9 12.7V19.3C9 20.4201 9 20.9802 9.21799 21.408C9.40973 21.7843 9.71569 22.0903 10.092 22.282C10.5198 22.5 11.0799 22.5 12.2 22.5Z"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>

						<span class="font-display text-xl font-medium transition-colors">
							{copied() ? "Copied" : "Copy Email"}
						</span>
					</button>
				</div>
			</div>
		</>
	);
}
