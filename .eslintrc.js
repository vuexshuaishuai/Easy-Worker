module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    // '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    semi: 0,
    'comma-dangle': 'off',
    // 缩进
    indent: ['off', 2],
    //解释: 字符串必须用单引号
    quotes: 'off',
    'no-trailing-spaces': 'off',
    'eol-last': 'off'
  }
}
