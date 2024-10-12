import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import stylistic from '@stylistic/eslint-plugin'
import { rules } from "@eslint/js/src/configs/eslint-all";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      ...rules,
      '@stylistic/indent': ['error', 2],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/space-before-function-paren': ['error', 'never'],
      '@stylistic/no-unused-vars': 'error',
      '@stylistic/no-undef': 'warn',
      '@stylistic/no-console': 'warn',
      '@stylistic/no-debugger': 'warn',
      '@stylistic/no-empty': 'warn',
      '@stylistic/no-extra-semi': 'warn',
      '@stylistic/no-irregular-whitespace': 'error',
      '@stylistic/no-multi-spaces': 'error',
      '@stylistic/no-multiple-empty-lines': 'error',
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/no-unreachable': 'error',
      '@stylistic/no-unused-expressions': 'error',
      '@stylistic/no-useless-return': 'error',
      '@stylistic/no-var': 'error',
      '@stylistic/prefer-const': 'warn',
      '@stylistic/prefer-template': 'warn',
      '@stylistic/max-len': ['error', { code: 120, ignoreUrls: true }],
    }
  }
];