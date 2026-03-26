import * as esbuild from "esbuild";

const context = await esbuild.context({
  entryPoints: ["./src/index.ts"],
  platform: "node",
  target: "node24",
  minify: true,
  bundle: true,
  format: "esm",
  outdir: "./dist",
  outExtension: { ".js": ".mjs" }
});

await context.rebuild();
process.exit(0);
