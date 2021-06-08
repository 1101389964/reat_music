const path = require("path"); //导入webpack的path模块

const resolve = (dir) => path.resolve(__dirname, dir);
//获取当前路径,__dirname表示当前路劲，dir箭头函数表示传过来的路径，拼接在一起返回出去

module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"), //以@代表src的路径，把src传入到上面的箭头函数中
    },
  },
};
