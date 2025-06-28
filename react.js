import jsxA11y from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import { config as baseConfig } from "./base.js";

/**
 * @param {string} dirname
 * @return {import("eslint").Linter.Config[]}
 */
export const config = (dirname) => [
  ...baseConfig(dirname),
  reactHooks.configs["recommended-latest"],
  {
    ...reactPlugin.configs.flat.recommended,
    ...reactPlugin.configs.flat["jsx-runtime"],
    ...jsxA11y.flatConfigs.strict,
    languageOptions: {
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
];
