---
path: '/blogs/markdown-test-2022-07-29'
date: 2022-07-29
title: 'マークダウンテスト'
tags: ["test","tagtest"]
cardImage: './NoImage.png'

---

***
# テキストの装飾
***
# 見出し
# H1 tag
## H2 tag
### h3 tag
#### h4 tag
##### h5 tag
###### h6 tag
***
# 強調・強勢・打ち消し線

_italic_

__太字__ 

~~打ち消し~~

_**~~Full~~**_

***
# 折りたたみ

<details><summary>テスト</summary>

みちゃいやーん
</details>

***
# リスト

* リスト
+ リスト
- リスト

1. 番号付きリスト
2. 番号付きリスト
3. 番号付きリスト
4. 1. ネスト
4. 2. ネスト
4. 3. ネスト

***
# 説明リスト

<dl>
    <dt>テスト</dt>
    <dd>内容<strong>装飾</strong>はHTMLタグで</dd>
</dl>

***
# チャックボックス

- [ ] タスク1
- [x] タスク2
***
# 引用
> 引用はしっかりと引用元を書き、原文ママ載せよう。
>> ネストして引用もできる


***
# 水平線
* * *
***

***
# リンク
* markdownで記述  
    CSSを適応する方法を見つけられなかった．

    [リンクテキスト(記事一覧に飛ぶよ)](/blogs "マウスホバー")  
* HTMLで記述  
    <a href="/blogs" class="link" title="マウスホバー" >リンクテキスト(記事一覧に飛ぶよ)</a>


***
# 改行の仕様

markdown上では改行していても実際は改行されない．  
あいうえお
あいうえお  

上記の書き方でも改行したい部分に空白を2マス入れると改行される．  
あいうえお  
あいうえお  

もしくは1行開けると改行される  
あいうえお

あいうえお  
ただしこの方法だと，間に1行空いてしまう．


***

# 画像埋め込み
![ALT](./test.png "マウスホバー")

***
# コード関連
`インライン表示`

```
const test = "example";
```
## プログラミング言語指定とタイトル指定
```python:title=test.py
for i in range(10):
    print(str(i))
```

```c{2}:title=test.c
void test(){
    printf("test daze");
    return 0;
}
```