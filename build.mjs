import { cp, mkdir, readFile, rename, rm, writeFile } from "node:fs/promises";

const clientPreview = process.argv.includes("--client-preview");

await rm("dist", { recursive: true, force: true });
await mkdir("dist/src", { recursive: true });
await mkdir("dist/server", { recursive: true });
await cp("index.html", "dist/index.html");
await cp("src", "dist/src", { recursive: true });
await writeFile(
  "dist/server/index.js",
  `export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const response = await env.ASSETS.fetch(request);

    if (response.status !== 404 || /\\.[a-z0-9]+$/i.test(url.pathname)) {
      return response;
    }

    return env.ASSETS.fetch(new Request(new URL("/index.html", url), request));
  },
};
`
);

if (clientPreview) {
  // Client previews are designed to be opened straight from index.html.
  // Keep the supporting source files tucked away while preserving relative asset paths.
  await mkdir("dist/ignore", { recursive: true });
  await rename("dist/src", "dist/ignore/src");
  await rename("dist/server", "dist/ignore/server");

  const index = await readFile("dist/index.html", "utf8");
  const styles = await readFile("dist/ignore/src/styles.css", "utf8");
  const script = await readFile("dist/ignore/src/main.js", "utf8");
  await writeFile(
    "dist/index.html",
    index
      .replace('    <link rel="stylesheet" href="src/styles.css" />', `    <style>\n${styles}\n    </style>`)
      .replace('    <script src="src/main.js" defer></script>', `    <script>\nwindow.__CLIENT_PREVIEW_ASSET_BASE__ = "ignore/src/assets/old-site";\n${script}\n    </script>`)
      .replace('    <link rel="stylesheet" href="/src/styles.css" />', `    <style>\n${styles}\n    </style>`)
      .replace('    <script src="/src/main.js" defer></script>', `    <script>\nwindow.__CLIENT_PREVIEW_ASSET_BASE__ = "ignore/src/assets/old-site";\n${script}\n    </script>`)
  );
}

console.log(clientPreview ? "Built client preview to dist/" : "Built static Fools Inn site to dist/");
