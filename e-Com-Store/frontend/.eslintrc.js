'use strict';

module.exports = {
  globals: {
    server: true,
  },
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module',
    "ecmaFeatures": {
      "jsx": true
  }
  },
  plugins: ['prettier'],
  extends: ['plugin:prettier/recommended'],
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    'linebreak-style': ['error', 'unix'],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-nested-ternary': 0,
    'jsx-quotes': 2,
    'prefer-rest-params': 0
  },
  overrides: [
    // node files
    {
      files: [
        '.eslintrc.js',
        '.template-lintrc.js',
        'ember-cli-build.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'lib/*/index.js',
      ],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2015,
      },
      env: {
        browser: false,
        node: true,
      },
    },
  ],
};
