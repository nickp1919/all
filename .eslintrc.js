module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  plugins: ['prettier', 'react'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': 'error',
    'no-undef': 'error',
    'no-extra-semi': 'error',
    'no-template-curly-in-string': 'error',
    'no-caller': 'error',
    'no-control-regex': 'off',
    'no-var': 'error',
    yoda: 'error',
    eqeqeq: 'error',
    'global-require': 'off',
    'brace-style': 'off',
    'eol-last': 'error',
    'no-extra-bind': 'warn',
    'no-process-exit': 'warn',
    'no-use-before-define': 'off',
    'no-unused-vars': ['error', { args: 'none', ignoreRestSiblings: true }],
    'no-unsafe-negation': 'error',
    'no-loop-func': 'warn',
    'prefer-const': 'error',
    indent: 'off',
    'react/display-name': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'react/prop-types': 'off',
    'no-useless-escape': 'off',
    semi: ['error', 'always'],
    'react/jsx-uses-react': 'off', // no longer needed with new jsx transform
    'react/react-in-jsx-scope': 'off', // ditto
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/ban-types': 'off',
      },
    },
  ],
};
