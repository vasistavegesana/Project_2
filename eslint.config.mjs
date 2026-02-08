import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

const baseConfig = {
  plugins: { js },
  extends: ["js/recommended"],
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
    },
  },
};

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    ...baseConfig,
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "script",
    },
  },
]);
