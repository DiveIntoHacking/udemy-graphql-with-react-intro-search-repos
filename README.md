# GraphQL with React入門 - QueryとMutationを学びPaginationの実装にチャレンジ！

本リポジトリは、Udemyのプログラミングコース「GraphQL with React入門 - QueryとMutationを学びPaginationの実装にチャレンジ！」の「実践編 - GitHubリポジトリ検索アプリケーションの開発にチャレンジ」のセクションで実装したソースコードを管理するためのものです。

## 本セクションで扱うソースコード

「本セクションで扱うソースコード」は以下の`git clone`コマンドで取得することが可能です。

```bash
$ git clone https://github.com/DiveIntoHacking/udemy-graphql-with-react-intro-search-repos.git
```

尚、本リポジトリは、GitHubとの通信を行う機能がありあますが、これには「GitHub Tokenの作成」で取得できるGitHubのアクセストークンの取得及び設定が必要になります。この詳細についてはレクチャーにて学習できますのでそちらでご確認ください。

以下は各レクチャーの名称とそのレクチャーで作成されたブランチ名との対応を示す表です。もし、レクチャーの中でうまく動作せず行き詰まったり、あるいは正常に動作はしたが自分の書いたコードとの比較を行ったりする場合には、各ブランチをcheckoutして参考にしてみてください。 全てレクチャー収録時のソースコードと同じもので動作確認済みのものとなっております。

|レクチャー名|ブランチ名|
|---|---|
| デモアプリの説明| - |
| GitHub Tokenの作成| - |
| Reactアプリケーションの作成からGitHubリポジトリの作成| - |
| 必要なnpmパッケージ(apollo-boost、graphql、react-apollo)をインストールする| install-npm-packages |
| 不要なコードやファイル等を除去する| garbage-collection |
| dotenvをセットアップする| setup-dotenv |
| GraphQLクライアントをセットアップする| setup-graphql-client |
| GraphQLのコードを別のファイルに分離する| separate-graphql-code |
| search queryとVariablesをアプリケーションに適用する| apply-query-and-variables |
| 検索フォームを作成し動的に検索を実行できるようにする| dynamic-search-form |
| タイトルを表示する| titlize |
| 検索結果一覧をリスト表示する| show-search-results |
| 次ページ(Next)ボタンを実装する| next-button |
| 前ページ(Previous)ボタンを実装する| previous-button |
| starの数を表示する| show-stargazers |
| starを付けているかどうかの状態を表示する| show-viewer-has-starred |
| onClickでstarを付与する| add-star |
| onClickでstarを解除する| remove-star |
| refetchQueriesを利用しstarの総数をstarの付与/解除に同期させる| synchronize-star-count-with-refetch-queries |
| writeQueryを利用しstarの総数を書き換える| update-star-with-write-query |



## FAQ

gitやGitHubに慣れていない方から寄せられる質問をまとめています。

### リポジトリの変更などを知る方法は？

starボタンをクリックすると、GitHubのトップページのタイムラインにその内容が表示されるようになります。

### 自分のアカウントにリポジトリをぶら下げたいのですが。。。

forkすることで可能です。画面右上の`Fork`ボタンをクリックしてください。

### 上記で新規にcloneを行い、該当のブランチにcheckoutする方法は？

`git clone`後に、`show-viewer-has-starred`というブランチをcheckoutしたい場合を例にすると、以下にコマンドを実行することになります。

```diff
$ git clone https://github.com/DiveIntoHacking/udemy-graphql-with-react-intro-search-repos.git
$ cd udemy-graphql-with-react-intro-search-repos
$ git checkout -t origin/show-viewer-has-starred
```

### ブランチ間の差分を知るには？

ブランチ間の差分を知るには以下のコマンドが有効です。以下は、「search queryとVariablesをアプリケーションに適用する」で実装したコードと「検索フォームを作成し動的に検索を実行できるようにする」で実装したコードとの差分を出力するコマンドになりますので、これを参考にしてコマンドを実行してみてください。

```bash
$ git diff origin/apply-query-and-variables..origin/dynamic-search-form
```

### プログラムの誤りを見つけてたがその連絡の手段は？

本プログラムはUdemy教育用のものですので、受講生からのリクエストを最優先していますので、Udemyのコースに設置されている公式のQ&Aにてご指摘の内容をご報告頂ければと思います。(本プログラムはオープンソースプロジェクトではありませんのでGitHubのIssuesでお知らせ頂いても対応出来ない場合がありますのでご了承ください。)

その他、不明な点が有りましたらUdemyのQ&Aにてご質問ください。

## 動画コース一覧

他にも以下のコースをUdemyにて公開中です。


|タイトル|概要|
|---|---|
|[フロントエンドエンジニアのためのReact・Reduxアプリケーション開発入門](https://www.udemy.com/react-application-development/?couponCode=GITHUB-REPO-README)|RESTful APIサーバと連携する実践的なCRUDアプリケーション開発手法を学び、今後のフロントエンドWeb開発の標準になり得るReact・Reduxアプリケーション開発をマスターし、もう一段階上のJavsScriptエンジニアになろう|
|[GraphQL with React入門 - QueryとMutationを学びPaginationの実装にチャレンジ！](https://www.udemy.com/graphql-with-react/?couponCode=GITHUB-README-FOOTER)|GraphQLの言語仕様を学習し、GitHubのGraphQL APIと連携するReactアプリケーションの実装にチャレンジします！React/GraphQL/Apollo等を利用し、近未来を見据えたAPI開発手法を先取りしよう！|
|[モジュールバンドラーwebpackを1日で習得！しかもフルスクラッチでインストールからカスタマイズまでの手順を理解する](https://www.udemy.com/webpack-crash-course/?couponCode=GITHUB-README-FOOTER)|Reactを題材にし各種形式のモジュールをローダー(babel/css/sass/html/eslint)やプラグイン(JS圧縮のカスタム/CSSのファイル分離と圧縮)でバンドルする方法をハンズオンで解説、今回もGitHubにソース完全公開|
|[React Hooks 入門 - HooksとReduxを組み合わせて最新のフロントエンド状態管理手法を習得しよう！](https://www.udemy.com/react-hooks-101/?couponCode=GITHUB-README-FOOTER)|Vue.js Firebase Docker Gatsby などを抑え、なんと受講生の37.2%が次に学びたいと注目度の高い React Hooks 。複雑な状態管理をシンプルに且つ美しく実装するためのフロントエンド開発手法を身につけよう！|






<div align='right'>
Dive into Hacking!
</div>
<div align='right'>
Udemy プログラミング講師
</div>
<div align='right'>

[はむ - プログラミングおじさん](https://www.udemy.com/user/76100880-5658-4a37-be77-5525d39a4726/)

</div>




