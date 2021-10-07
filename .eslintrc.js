module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  globals: {
    React: true,
    JSX: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb-typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: ['tsconfig.json'],
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  ignorePatterns: ['tsconfig.json'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
