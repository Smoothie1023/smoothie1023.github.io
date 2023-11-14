---
path: '/blogs/2023-11-15-DiscordBotInit'
date: 2023-11-15
title: 'Discord Botのテンプレート'
tags: ["Discord","Bot","Python","Programming"]
cardImage: './discord.png'
description: 'Discord.pyによるDiscord Botのテンプレート'

---
## 動作環境
- Python 3.11.3
- discord.py 2.3.2

## Botの初期設定
![ALT](./DiscordDeveloperSite.png "Discord Developer Site")
Discord DeveloperからのBotの作成はいずれ解説します。  

Botの作成方法を理解している人はOAuth2 URL Generatorにて画像のように設定してください。  
また、BOT PERMISSIONSについてはテストBotのため管理者をつけていますが、使用用途に合わせた必要な権限のみにしてください。  

ファイル構成
```
Bot
├── DiscordKeys
│   ├── token.txt
│   └── guild_id.txt
└── bot.py
```

## DiscordKeysフォルダーについて
DiscordのBotにはトークンを発行する必要があります。  
トークンはBot作成時に <u>__一度__</u> だけ表示されます。  
トークンが他人に知られると、その<u>Botを悪用される可能性があります。</u>   
事故防止のためにトークンは別ファイルに保存しています。 
Gitで管理する場合フォルダーを.gitignoreに追加してください。  

## guild_id.txtについて
guild_idはサーバーのIDです。
スラッシュコマンドはギルドコマンドとグローバルコマンドの2種類があり、ギルドコマンドは
サーバー内でのみ使用できるかわりに反映が早いらしい **要出典**

取得方法は画像の場所にある、開発者モードをオンの状態にしてからサーバーの右クリックからサーバーIDをコピーでできます。
![ALT](./DeveloperMode.png "設定→詳細設定→開発者モード")

## DiscordBotのテンプレート

```python:title=bot.py
import os

import discord
from discord import app_commands

#Discord Bot Initialize
client = discord.Client(intents=discord.Intents.default())
tree = discord.app_commands.CommandTree(client)

DiscordIDs = 'DiscordKeys/'

with open(os.path.join(DiscordIDs, 'token.txt'), 'r') as t, \
     open(os.path.join(DiscordIDs, "guild_id.txt"), 'r') as g:
    
    TOKEN = t.read()
    GUILD_ID = g.read()

guild=discord.Object(GUILD_ID)

@tree.command(
    guild=guild,
    name='test',
    description='test command'
)
async def test(ctx:discord.Integration):
    await ctx.response.send_message("test!")

@client.event
async def on_ready():
    print('ready...')
    await tree.sync(guild=guild)
    print('synced...')

client.run(TOKEN)
```

## コード解説

```python
client = discord.Client(intents=discord.Intents.default())
tree = discord.app_commands.CommandTree(client)
 ```
よく言われるおまじないです。  
client部分はインテントといってスラッシュコマンドが実装される前は`!test`だったり`/test`だったりと、  
コマンドを認識させる文字列をintentsを使って設定してました。（確か）  

treeはスラッシュコマンドを使うために必要なものです。

```python{4}
@client.event
async def on_ready():
    print('ready...')
    await tree.sync(guild=guild)
    print('synced...')

client.run(TOKEN)
```

`await tree.sync(guild=guild)`にてスラッシュコマンドを同期させています。


```python
@tree.command(
    guild=guild,
    name='test',
    description='test command'
)
async def test(ctx:discord.Integration):
    await ctx.response.send_message("test!")
```

Discordのコマンドのテンプレートです。  
コマンドを追加する場合これを元に作成します。  
`guild=guild`はスラッシュコマンドを使用するサーバーを指定しています。  
`name='test'`はコマンド名です。小文字のみ使用可能です。  
`description='test command'`はコマンドの説明です。

## 実行結果
![ALT](./DiscordAutoComplete.png "コマンドの予測機能")
![ALT](./BotTest.png "Botの実行結果")

今後もDiscord Botで便利な機能を紹介できればいいなと思っています。