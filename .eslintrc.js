module.exports = {
  root: true,
  env: {
    brower: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typesciprt-eslint/parser',
    sourceType: 'module'
  },
  extends: ['plugin:import/recommended', 'eslint:recommended', 'plugin:vue/vue3-essential', '@nuxtjs/eslint-config-typescript', 'prettier'],
  rules: {
    'vue/multi-word-component-names': 'off',
    'no/multiple-empty-lines': 'off',
    'no-unused-vars': 'off'
  }
};
