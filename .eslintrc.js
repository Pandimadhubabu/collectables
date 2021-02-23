module.exports = {
  extends: ['leozera'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    /* Turning off for now since React 17 doesn't require import */
    'react/react-in-jsx-scope': 'off',
    /* Disabling it for now til review eslint-config-leozera */
    'react/require-default-props': 'off',
  },
  env: {
    jest: true,
  },
};
