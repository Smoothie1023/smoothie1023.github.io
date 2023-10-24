---
path: '/blogs/2023-10-25'
date: 2023-10-25
title: 'GatsbyでGitHub Pagesにデプロイするときの備忘録'
tags: ["Gatsby","Tips"]
cardImage: './gatsby.png'

---
# GatsbyでGitHub Pagesにデプロイするときの備忘録

## はじめに
### 環境

* Gatsby.js `v5.12.7`
* Node.js `v18.2.0`

## 1.独自ドメインを使用している場合デプロイ時に独自ドメインが消える

### 発生した事案

`npx gh-pages -d public`
これを実行すると、GitHub PagesのCustom domainの設定がリセットされてしまう。

### 解決方法

publicフォルダー内にCNAMEファイルを作成し、独自ドメインを記述する。
<a href="https://github.com/tschaub/gh-pages/issues/213" class="link">参考サイト</a>

***

## 2.更新した記事が反映されない

### 発生した事案

記事を作成し、GitHub Pagesにデプロイしたが、記事が反映されない。

### 解決方法

`npx gatsby build --prefix-paths`を実行し、publicフォルダーの中身を更新する。

再度`npx gh-pages -d public`を実行すると、記事が反映される。