import { context, build } from "esbuild";
import copy from "esbuild-copy-files-plugin";
import cssModulesPlugin from "esbuild-css-modules-plugin";
import { injectManifest } from "workbox-build";

const method = process.argv.slice(2)[0];

const options = {
  entryPoints: ["src/index.tsx"],
  outdir: "dist",
  format: "esm",
  jsx: "automatic",
  bundle: true,
  plugins: [
    copy({
      source: ["./static", "./icons", "manifest.json", "index.html"],
      target: "./dist",
      copyWithFolder: true,
    }),
    cssModulesPlugin(),
  ],
};

if (method === "watch") {
  let ctx = await context(options);

  await ctx.watch();

  let { host, port } = await ctx.serve({
    servedir: "dist",
  });

  console.log(`Serving at ${host}:${port}`);
}

if (method === "build") {
  await build({
    ...options,
    bundle: true,
    minify: true,
    sourcemap: true,
    splitting: true,
  });
}

await build({
  entryPoints: ["./sw.ts"],
  bundle: true,
  format: "cjs", // 😕 Can't use module worker in Firefox yet.
  outfile: "dist/service-worker.js",
});

await new Promise((resolve) => setTimeout(resolve, 1000));

await injectManifest({
  globDirectory: "dist/",
  globPatterns: [
    "**/*.{css,eot,html,ico,jpg,js,json,png,svg,ttf,txt,webmanifest,woff,woff2,webm,xml}",
  ],
  globFollow: true,
  globStrict: true,
  maximumFileSizeToCacheInBytes: 5000000,
  swSrc: "dist/service-worker.js",
  swDest: "dist/service-worker.js",
});
