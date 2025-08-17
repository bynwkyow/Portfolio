// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
	<StartServer
		document={({ assets, children, scripts }) => (
			<html lang="en">
				<head>
					<title>Bynwkyow</title>
					<meta charset="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="icon" href="/logo.webp" />
					<meta
						name="description"
						content={`A full-stack web developer\nPassionate about turning ideas into fully working products, with 4 years of experience building real-world applications that solve real problems and add value.`}
					/>
					<meta property="og:title" content="Bynwkyow" />
					<meta
						property="og:description"
						content={`A full-stack web developer\nPassionate about turning ideas into fully working products, with 4 years of experience building real-world applications that solve real problems and add value.`}
					/>
					<meta property="og:url" content="https://bynwkyow.vercel.app/" />
					<meta property="og:site_name" content="Bynwkyow" />
					<meta
						property="og:image"
						content="https://bynwkyow.vercel.app/thumbnail.webp"
					/>
					<meta property="og:type" content="website" />
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:title" content="Bynwkyow" />
					<meta
						property="twitter:description"
						content={`A full-stack web developer\nPassionate about turning ideas into fully working products, with 4 years of experience building real-world applications that solve real problems and add value.`}
					/>
					<meta
						property="twitter:image"
						content="https://bynwkyow.vercel.app/thumbnail.webp"
					/>
					{assets}
				</head>
				<body class="bg-[#0D0D0D] text-white">
					<div class="px-3 sm:px-8 flex flex-col h-screen" id="app">
						{children}
					</div>
					{scripts}
				</body>
			</html>
		)}
	/>
));
