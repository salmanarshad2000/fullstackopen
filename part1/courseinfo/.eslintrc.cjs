module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended"
  ],
  ignorePatterns: ["dist"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "indent": ["error", 2],
    "eol-last": ["error", "always"],
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "arrow-parens": ["error", "always"],
    "comma-dangle": ["error", "never"]
  }
};
