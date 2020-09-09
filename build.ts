const { argv } = require("process");
const { build } = require("esbuild");
const path = require("path");
// optionsの定義
const options = {
  // 以下のdefineプロパティを設定しない場合Reactのプロジェクトの実行時にエラーが出ます
  define: { "process.env.NODE_ENV": "'production'" },
  entryPoints: [path.resolve(__dirname, "src/index.tsx")],
  minify: true,
  bundle: true,
  target: "es2015",
  platform: "browser",
  outdir: path.resolve(__dirname, "dist"),
  tsconfig: path.resolve(__dirname, "tsconfig.package.json"),
};
// Buildの実行
build(options).catch((err) => {
  process.stderr.write(err.stderr);
  process.exit(1);
});
