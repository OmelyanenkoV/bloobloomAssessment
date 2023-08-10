module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: false
    }
  },
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  plugins: ['@typescript-eslint', 'vue', 'risxss', 'simple-import-sort', 'test-id'],
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'never'],
    'vue/script-setup-uses-vars': 'error',
    'vue/max-attributes-per-line': 'off',
    'test-id/data-test-id': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'risxss/catch-potential-xss-vue': 'error',
    'vue/html-self-closing': 'off',
    'comma-dangle': 'off',
    'vue/multi-word-component-names': 0,
    'vue/no-template-shadow': 0,
    'no-console': 'error',
    'vue/no-parsing-error': [
      'error',
      {
        'x-invalid-namespace': false
      }
    ]
  }
}
