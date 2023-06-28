const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //注释: 关闭ESLint
  lintOnSave: false,
})
