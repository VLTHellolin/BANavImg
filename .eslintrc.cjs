/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es2024: true,
  },
  parser: 'vue-eslint-parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'prettier',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 15,
    extraFileExtensions: '.vue',
  },
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'no-unused-vars': 'off', // for pug
    'no-undef': 'off',
  },
};
