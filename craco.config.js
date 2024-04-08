const CracoLessPlugin = require("craco-less");

module.exports = {
devServer: {
  port: 3001 // 指定开发服务器的端口
},
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        modifyLessRule: (lessRule, context) => {
          lessRule.test = /\.module\.less$/;
          lessRule.exclude = /node_modules/;
          return lessRule;
        },
        cssLoaderOptions: {
          modules: { localIdentName: "[local]_[hash:base64:5]" }
        }
      },
    },
  ],
}