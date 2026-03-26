import cybozuEslintConfig from "@cybozu/eslint-config/flat/presets/node-prettier";

export default [...cybozuEslintConfig, { ignores: ["node_modules", "dist"] }];
