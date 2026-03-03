import * as esbuild from "esbuild";

const context = await esbuild.context({
  entryPoints: ["./src/js/index.ts"],
  platform: "node",
  minify: true,
  bundle: true,
  format: "esm",
  outdir: "./dist",
  outExtension: { ".js": ".mjs" },
  external: ["@kintone/rest-api-client"]
});

await context.rebuild();
process.exit(0);
