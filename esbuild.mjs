import { context, build } from "esbuild";
import copy from "esbuild-copy-files-plugin";
import htmlPlugin from "@chialab/esbuild-plugin-html";
import { clean } from "esbuild-plugin-clean";
import { injectManifest } from "workbox-build";

const method = process.argv.slice(2)[0];

const _injectManifest = () => ({
  name: "_injectManifest",
  setup(build) {
    build.onEnd(() => {
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
        maximumFileSizeToCacheInBytes: 5000000,
        swSrc: "src-sw.js",
        swDest: "dist/service-worker.js",
        templatedURLs: {
          "/": ["index.html"],
        },
      });
    });
  },
});

const options = {
  entryPoints: ["index.html"],
  outdir: "dist",
  format: "esm",
  jsx: "automatic",
  bundle: true,
  assetNames: "assets/[name]-[hash]",
  chunkNames: "[ext]/[name]-[hash]",
  plugins: [
    clean({
      patterns: ["./dist/*"],
    }),
    htmlPlugin(),
    copy({
      source: ["./static", "./icons", "manifest.json"],
      target: "./dist",
      copyWithFolder: true,
    }),
    _injectManifest(),
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
