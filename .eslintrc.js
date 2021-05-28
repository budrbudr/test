module.exports = {
  root: true,
  env: {
    node: true,
  },

  extends: [
    '@vue/airbnb',
    'plugin:vue/recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': 'off', //process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'import/extensions': [
      'error',
      { vue: 'never' },
    ],
    'vue/max-attributes-per-line': ['error', {
      singleline: 3,
      multiline: {
        max: 1,
        allowFirstLine: false,
      },
    },
    ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'always', prev: 'block-like', next: '*' },
    ],
    'import/prefer-default-export': 'off',
    'import/no-cycle' : 'off',
    'no-plusplus': 'off',
    'no-underscore-dangle' : 'off'
  },
};
