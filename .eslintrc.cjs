module.exports = {
  root: true,
  ignorePatterns: ["node_modules/*", ".next/*", ".out/*", "!.eslintrc.js", "!.prettierrc.js"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
  ],
  plugins: ["import", "jest"],
  rules: {
    "no-console": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "@typescript-eslint/no-unused-vars": ["warn"],
    "@typescript-eslint/explicit-function-return-type": [
      "warn",
      {
        allowExpressions: true,
        allowConciseArrowFunctionExpressionsStartingWithVoid: true,
      },
    ],
    "prettier/prettier": [
      "error",
      { endOfLine: "auto", singleQuote: false, semi: true },
      { usePrettierrc: true },
    ],
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal"],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react", "react-router-dom"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "react-hooks/exhaustive-deps": "off",
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "off",
    "react/display-name": 0,
    "jsx-a11y/no-onchange": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/mouse-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "no-non-null-assertion": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "jsx-a11y/no-autofocus": [
      2,
      {
        ignoreNonDOM: false,
      },
    ],
    "@nrwl/nx/enforce-module-boundaries": "off",
    "@next/next/no-html-link-for-pages": 0,
    "@typescript-eslint/ban-ts-comment": "off",
  },
  settings: {
    react: {
      version: "18",
    },
  },
  env: {
    "jest/globals": true,
  },
};
