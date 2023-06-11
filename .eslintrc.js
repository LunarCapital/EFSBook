module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:solid/typescript", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["solid", "unused-imports"],
  rules: {
    "no-unused-vars": "on",
    "unused-imports/no-unused-imports": "error",
  },
};
