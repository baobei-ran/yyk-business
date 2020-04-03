module.exports = {
  presets: ["@vue/cli-plugin-babel/preset",
  ["@babel/preset-env", {
    useBuiltIns: "entry", // or "usage" 使用的是按需加载
    corejs: 3,
    }]
  ]
};
