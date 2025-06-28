// @ts-check

import eslint from "@eslint/js";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import { importX } from "eslint-plugin-import-x";
import tseslint from "typescript-eslint";

/**
 * @param {string} dirname
 */
export const config = (dirname) =>
  tseslint.config(
    { ignores: ["**/dist/", "**/generated/"] },
    eslint.configs.recommended,
    tseslint.configs.strictTypeChecked,
    tseslint.configs.stylisticTypeChecked,
    {
      languageOptions: {
        parserOptions: {
          projectService: true,
          tsconfigRootDir: dirname,
        },
      },
      rules: {
        "@typescript-eslint/consistent-type-imports": "error",
      },
    },
    importX.flatConfigs.recommended,
    importX.flatConfigs.typescript,
    {
      settings: {
        "import-x/resolver-next": [
          createTypeScriptImportResolver({ project: dirname }),
        ],
      },
    },
    {
      files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
      extends: [tseslint.configs.disableTypeChecked],
    },
    {
      files: ["**/*.cjs"],
      languageOptions: {
        sourceType: "commonjs",
      },
    },
  );
