import pluginNext from "@next/eslint-plugin-next";
import { config as reactConfig } from "./react.js";

/**
 * @param {string} dirname
 * @return {import("eslint").Linter.Config[]}
 */
export const config = (dirname) => [
  ...reactConfig(dirname),
  { ignores: ["**/.next/"] },
  {
    settings: {
      "jsx-a11y": {
        components: {
          Image: "img",
          Link: "a",
        },
      },
    },
  },
  {
    plugins: {
      "@next/next": pluginNext,
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs["core-web-vitals"].rules,
    },
    settings: {
      next: {
        rootDir: dirname,
      },
    },
  },
];
