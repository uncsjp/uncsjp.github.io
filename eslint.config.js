// Default config for new eslint.config.js with eslint-plugin-react
// from https://github.com/jsx-eslint/eslint-plugin-react
const react = require('eslint-plugin-react');

module.exports = [
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      react,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
     },
  },
];
