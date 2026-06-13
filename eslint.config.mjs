import js from '@eslint/js'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import prettier from 'eslint-config-prettier'
import importX from 'eslint-plugin-import-x'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import unicorn from 'eslint-plugin-unicorn'
import unusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'

export default [
  { ignores: ['examples/**', 'dist/**', 'eslint.config.mjs'] },

  js.configs.recommended,
  ...tsPlugin.configs['flat/recommended'],
  prettier,

  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
      globals: { ...globals.node, ...globals.mocha, ...globals.es2021 },
    },
    plugins: {
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
      'import-x': importX,
      unicorn,
    },
    settings: {
      'import-x/parsers': {
        '@typescript-eslint/parser': ['.ts'],
      },
      'import-x/resolver': {
        typescript: {
          alwaysTryTypes: false,
        },
      },
    },
    rules: {
      'no-console': ['error'],
      'comma-dangle': 0,
      curly: ['error'],
      'prefer-const': 0,
      'no-template-curly-in-string': 'error',
      'comma-spacing': 0,
      'semi-spacing': 0,
      'space-before-blocks': 0,
      'switch-colon-spacing': ['warn', { after: true, before: false }],
      'keyword-spacing': 0,
      'template-curly-spacing': 0,
      'rest-spread-spacing': 0,
      'no-multi-spaces': 0,
      'unicorn/prefer-node-protocol': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      indent: 'off',
      'linebreak-style': ['error', 'unix'],
      semi: ['error', 'never'],
      'spaced-comment': [
        'error',
        'always',
        {
          line: {
            markers: ['/'],
            exceptions: ['-', '+'],
          },
          block: {
            markers: ['!'],
            exceptions: ['*'],
            balanced: true,
          },
        },
      ],
      '@typescript-eslint/no-explicit-any': ['warn'],
      '@typescript-eslint/ban-ts-comment': 0,
      '@typescript-eslint/prefer-optional-chain': 0, // ["warn"],
      'no-empty-function': 0,
      '@typescript-eslint/no-empty-function': 0, // ["warn"],
      '@typescript-eslint/no-require-imports': 0,
      '@typescript-eslint/no-this-alias': 0,
      '@typescript-eslint/no-empty-object-type': ['warn'],
      '@typescript-eslint/no-array-constructor': ['off'],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'after-used',
          caughtErrors: 'none',
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      'no-extra-parens': 0,
      'import-x/namespace': 'error',
      'import-x/default': 'error',
      'import-x/named': 'error',
      'import-x/no-default-export': 'error',
      'import-x/extensions': ['error', 'always', { ignorePackages: true }],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'separate-type-imports',
        },
      ],
      'import-x/no-duplicates': 'error',
      'unused-imports/no-unused-imports': 'error',
      'import-x/no-amd': 'error',
    },
  },

  {
    files: ['src/**/*', 'tests/**/*'],
    rules: {
      'import-x/no-commonjs': 'error',
    },
  },
  {
    files: ['src/**/*.ts'],
    rules: {
      'prefer-const': ['error', { destructuring: 'all' }],
    },
  },
  {
    files: ['tests/**/*'],
    rules: {
      'no-empty-function': 0,
      '@typescript-eslint/no-empty-function': 0,
    },
  },
  {
    files: ['types/**/*'],
    rules: {
      '@typescript-eslint/no-unused-vars': 0,
      '@typescript-eslint/no-explicit-any': 0,
    },
  },
]
