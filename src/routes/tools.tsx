import { Tool } from "~/components/Tool";

export default function Tools() {
	return (
		<>
			<span class="font-display select-none font-bold text-5xl animate-fade-in">
				<span class="text-black/30">My tools &</span>
				<br />
				<span class="text-black">Frameworks</span>
			</span>

			<div class="flex flex-col gap-3 mt-auto my-4 animate-fade-in">
				<div class="flex gap-3">
					<Tool
						label="Vue.js"
						icon="/tools/vuejs.svg"
						to="https://vuejs.org/"
					/>
					<Tool
						label="Github"
						icon="/tools/github.png"
						to="https://github.com/"
					/>
					<Tool
						label="Visual Studio Code"
						icon="/tools/vscode.png"
						to="https://code.visualstudio.com/"
					/>
				</div>
				<div class="flex gap-3">
					<Tool
						label="Rust"
						icon="/tools/rust.png"
						to="https://www.rust-lang.org/"
					/>
					<Tool
						label="Next.js"
						icon="/tools/nextjs.svg"
						to="https://nextjs.org/"
					/>
					<Tool
						label="Nuxt.js"
						icon="/tools/nuxtjs.svg"
						to="https://nuxt.com/"
					/>
					<Tool
						label="Javascript"
						icon="/tools/js.png"
						to="https://www.javascript.com/"
					/>
				</div>
				<div class="flex gap-3">
					<Tool
						label="Typescript"
						icon="/tools/ts.png"
						to="https://www.typescriptlang.org/"
					/>
					<Tool label="Tauri" icon="/tools/tauri.png" to="https://tauri.app/" />
					<Tool
						label="Discord.JS"
						icon="/tools/djs.png"
						to="https://discord.js.org/"
					/>
					<Tool label="Vite" icon="/tools/vite.png" to="https://vite.dev/" />
				</div>
			</div>
		</>
	);
}
