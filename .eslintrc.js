module.exports = {
  extends: '@cybozu/eslint-config/presets/node-prettier',
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true
    }
  },
  globals: {
    kintone: false
  }
};
