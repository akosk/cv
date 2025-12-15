// index.tsx (Bun v1.3 runtime)
/** @jsx jsx */
/** @jsxImportSource hono/jsx */
import { Hono } from "hono@4";
import { html } from "hono/html";
import { serveStatic } from "hono/bun";

const app = new Hono();
app.use("/public/*", serveStatic({ root: "./" }));

const homePage = (
  <html lang="en">
    <head>
      <title>Ákos Kiszely</title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
      <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
    </head>

    <body class="bg-gradient-to-tr from-sky-50 via-sky-300/40 to-sky-100 text-slate-900 min-h-screen flex items-center justify-center font-[Inter_Tight,sans-serif]">
      <div class="overflow-hidden rounded-sm shadow-2xl bg-white bg-opacity-20 backdrop-blur">
        <main class="max-w-2xl mx-auto">
          <header class="text-left px-8 pb-8 pt-10 flex items-center gap-x-4">
            <div class="relative w-[56px] h-[56px] rounded-full overflow-hidden">
              <img
                src="/public/avatar.jpg""
                alt="Profile"
                class="w-full h-full"
              />
              <div class="absolute inset-0 rounded-full z-10 inset-shadow-xs inset-shadow-slate-200" />
            </div>
            <div class="space-y-0.5">
              <h1 class="text-xl font-normal">Ákos Kiszely</h1>
              <p class="text-base text-slate-500 font-normal">
                Software Engineer
              </p>
            </div>
          </header>

          <section class="space-y-4 text-left pb-8 px-8 max-w-md text-slate-500 text-base leading-relaxed tracking-wide">
            <p>
              I architect and deliver end-to-end AI solutions that enable
              companies to integrate artificial intelligence into production
              systems.
            </p>
            <p>
              My expertise includes AI agent design, multi-agent orchestration,
              and custom model development through fine-tuning—covering the full
              lifecycle from system architecture and integration to scalable,
              reliable deployment.
            </p>
          </section>

          <nav class="flex justify-left space-x-4 px-8 py-4 bg-sky-50/50">
            <a
              href="mailto:akos.kiszely@gmail.com"
              class="text-slate-300 hover:text-slate-400 transition-colors"
            >
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </nav>
        </main>
      </div>
    </body>
  </html>
);

app.get("/", (c) =>
  c.html(
    <>
      {html`<!doctype html>`}
      {homePage}
    </>
  )
);

app.get("/health", (c) => c.json({ status: "ok" }));

Bun.serve({
  port: import.meta.env.PORT,
  fetch: app.fetch,
});
