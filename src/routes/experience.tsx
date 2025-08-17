import clsx from "clsx";
import { For } from "solid-js";
import { EXPERIENCES } from "~/const";

export default function Experience() {
	return (
		<>
			<span class="font-display flex lg:block gap-1 select-none font-bold text-5xl animate-fade-in">
				<span class="text-black/30">Work</span>
				<br />
				<span class="text-black">Experience</span>
			</span>

			<div class="flex mt-auto my-4">
				<div class="flex flex-col flex-1">
					<For each={EXPERIENCES}>
						{(exp, i) => (
							<div class="animate-slide-up w-full" style={{ "animation-delay": `${i() * 120}ms` }}>
								<div class="relative z-10">
									<img
										src={exp.icon}
										width="100"
										height="100"
										class="rounded-full border z-10 pointer-events-none select-none border-black/20"
										alt={`${exp.org} branding`}
									/>
									<div class="absolute flex flex-col gap-1 w-[600px] lg:w-[30vw] top-0 px-2 left-[100px] text-black">
										<span class="font-display font-bold text-4xl">
											{exp.org}
										</span>
										<span class="font-display text-xl text-black/50">
											{exp.title} - {exp.date}
										</span>
										<span class="font-display text-xl text-black/80">
											{exp.description}
										</span>
									</div>
								</div>
								<div
									class={clsx(
										i() === 0 ? "h-30" : "h-15",
										"border-l border-black/30 border-dashed ml-[50px] scale-y-110",
									)}
								/>
								<div
									class={clsx(
										"w-2 h-2 bg-[#9d9d9d] z-20 ml-[50px] rounded-full -translate-x-1/2",
										i() === 0 ? "-translate-y-0.5" : "translate-y-1",
									)}
								/>
							</div>
						)}
					</For>
				</div>
			</div>
		</>
	);
}
