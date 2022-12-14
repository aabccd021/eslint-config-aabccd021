module.exports = {
	plugins: [
    "@typescript-eslint",
    "functional",
    "fp-ts",
    "only-warn",
    "simple-import-sort",
    "unused-imports"
	],
	ignorePatterns: [
    "**/*.js",
    "dist/",
    "node_modules"
	],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": [
      "**/tsconfig.**"
    ]
  },
  "overrides": [
    {
      "files": [
        "test/**/*.test.ts"
      ],
      "rules": {
        "functional/no-expression-statement": "off",
        "functional/no-return-void": "off"
      }
    }
  ],
	extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/strict",
    "plugin:functional/all",
    "plugin:fp-ts/all",
    "plugin:prettier/recommended",
    "prettier"
	],
	rules: {
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/unbound-method": "off",
    "functional/functional-parameters": "off",
    "functional/no-mixed-type": "off",
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "printWidth": 100
      }
    ],
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",
    "unused-imports/no-unused-imports-ts": "error",
    "unused-imports/no-unused-vars": [
      "error",
      {
        "vars": "all",
        "varsIgnorePattern": "^_",
        "args": "after-used",
        "argsIgnorePattern": "^_"
      }
    ],
    "curly": [
      "error",
      "all"
    ],
    "eqeqeq": "error",
    "max-len": [
      "error",
      {
        "code": 100
      }
    ],
    "no-else-return": "error",
    "no-undef-init": "error",
    "no-unsafe-optional-chaining": "error",
    "no-use-before-define": [
      "error",
      {
        "functions": false
      }
    ],
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "object-shorthand": "error",
    "prefer-arrow-callback": "error",
    "prefer-destructuring": "error",
    "prefer-template": "error"
	}
}
