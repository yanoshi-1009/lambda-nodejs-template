import * as esbuild from "esbuild";

const context = await esbuild.context({
  entryPoints: ["./src/index.ts"],
  platform: "node",
  target: "node24",
  minify: true,
  bundle: true,
  format: "esm",
  outdir: "./dist",
  // Use .mjs so the file is recognized as ESM without relying on package.json "type" field, and also for Lambda to treat it as ESM
  outExtension: { ".js": ".mjs" }
});

await context.rebuild();
process.exit(0);
