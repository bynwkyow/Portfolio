export const Tool = (props: { label: string; icon: string; to: string }) => {
	return (
		<a
			class="relative select-none group border border-black/20 w-[84px] h-[84px] flex items-center justify-center rounded-full transition-transform duration-200 hover:scale-105 active:scale-95 hover:shadow-lg"
			target="_blank"
			rel="noopener noreferrer"
			href={props.to}
		>
			<span class="absolute bg-neutral-800 transition-opacity transition-transform opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 -top-12 text-white font-medium p-2 rounded-sm text-nowrap drop-shadow-sm">
				{props.label}
			</span>
			<img
				width="48"
				height="48"
				alt={`${props.label} icon`}
				src={props.icon}
				class="transition-transform duration-200 group-hover:scale-110"
			/>
		</a>
	);
};
