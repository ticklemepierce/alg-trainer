import { context, build } from "esbuild";
import copy from "esbuild-copy-files-plugin";
import htmlPlugin from "@chialab/esbuild-plugin-html";
import { clean } from "esbuild-plugin-clean";
import { injectManifest } from "workbox-build";

const method = process.argv.slice(2)[0];

const options = {
  entryPoints: ["index.html"],
  outdir: "dist",
  bundle: true,
  minify: true,
  sourcemap: true,
  splitting: true,
  format: "esm",
  assetNames: "assets/[name]-[hash]",
  chunkNames: "[ext]/[name]-[hash]",
  plugins: [
    clean({
      patterns: ["./dist/*"],
    }),
    htmlPlugin(),
    copy({
      // source: ['./static', './icons', './service-worker.js', 'manifest.json'],
      source: ["./static", "./icons", "manifest.json"],
      target: "./dist",
      copyWithFolder: true,
    }),
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
  await build(options);
}

setTimeout(() => {
  injectManifest({
    globDirectory: "dist/",
    globPatterns: [
      "**/*.{css,eot,html,ico,jpg,js,json,png,svg,ttf,txt,webmanifest,woff,woff2,webm,xml}",
    ],
    globFollow: true,
    globStrict: true,
    globIgnores: [
      "**/*-es5.*.js",
      "3rdpartylicenses.txt",
      "assets/images/icons/icon-*.png",
    ],
    dontCacheBustURLsMatching: new RegExp(".+.[a-f0-9]{20}..+"),
    maximumFileSizeToCacheInBytes: 5000000,
    swSrc: "src-sw.js",
    swDest: "dist/service-worker.js",
  });
}, 1000);
