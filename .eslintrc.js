module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y',
    'prettier',
    'clean-code',
    'unicorn',
    'jsdoc',
    'no-magics'
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['node_modules/**'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-boolean-value': 'error',
    'react/jsx-no-bind': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/anchor-has-content': 'error',

    'prettier/prettier': 'error',

    'max-lines-per-function': ['error', { max: 30 }],
    'no-nested-ternary': 'warn',

    'unicorn/filename-case': ['error', { case: 'kebabCase' }],
    'unicorn/prevent-abbreviations': 'warn',
    'unicorn/no-null': 'error',
    'unicorn/consistent-function-scoping': 'error',

    'jsdoc/check-alignment': 'warn',
    'jsdoc/check-param-names': 'error',
    'jsdoc/require-param': 'error',
    'jsdoc/require-returns': 'error',

    'complexity': ['warn', { max: 5 }],
    'max-statements': ['warn', { max: 10 }],
    'max-nested-callbacks': ['warn', { max: 3 }],
    'curly': ['error', 'all'],
    'spaced-comment': ['error', 'always'],
    'no-empty': ['error', { allowEmptyCatch: false }],
    'no-undef': 'error',
    'no-global-assign': 'error',
    'prefer-arrow-callback': 'warn',
    'prefer-const': 'warn'
  }
};
