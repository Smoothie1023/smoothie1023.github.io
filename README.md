# このリポジトリは、ブログのソースです。
# ブログのURLは、https://blog.ryukey.com です。

## ブログの開発環境
- Node.js v18.2.0
- フレームワーク：Gasby v5.12.7
- ホスティング：GitHub Pages
- URL：https://blog.ryukey.com

## ライセンス
ソースコードは[0BSD](https://opensource.org/licenses/0BSD)ライセンスです。

## 備忘録
ビルドコマンド
```
npx gatsby build --prefix-paths
```
キャッシュクリアコマンド
```
npx gatsby clean
```
テストコマンド
```
npx gatsby develop -H 0.0.0.0
```
公開コマンド
```
npx gh-pages -d public
npx gatsby build --prefix-paths &&npx gh-pages -d public
```
