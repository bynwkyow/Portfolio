// @refresh reload
import { mount, StartClient } from "@solidjs/start/client";

// biome-ignore lint/style/noNonNullAssertion: <div id="app"> is always accessible -> entry-server.tsx
mount(() => <StartClient />, document.getElementById("app")!);
