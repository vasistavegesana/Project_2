
// Import ESLint core configs and helpers
import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config"; 

// Base ESLint configuration shared across files
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

// Export the final ESLint configuration
export default defineConfig([ 
  // Apply base config to all JS module types
  {
    files: ["**/*.{js,mjs,cjs}"],
    ...baseConfig,
  },
  // Override settings for standard JS files
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "script",
    },
  },
]);
