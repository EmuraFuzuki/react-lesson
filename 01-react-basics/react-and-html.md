# ReactとHTML

## HTML

HTMLはWebページの構造を記述するマークアップ言語です。例えば以下のように記述します。
```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>

  <body>
    <h1>Hello</h1>
    <p>This is a web page.</p>
  </body>
</html>
```

`h1`などをタグといい、`<title>My Page</title>`のようにタグで囲って要素を追加します。タグは入れ子にすることが出来ます。
```html
<div>
  <h1>Hello</h1>
  <div>
    <p>This is a web page.</p>
    <p>No content here.</p>
  </div>
</div>
```

## ReactとHTML

HTML単独では3つの問題があります。

1. 動的なコンテンツを扱うのが苦手
2. 再利用性が低い
3. 状態管理が難しい

そこでReactやVueなどのフレームワークを利用してその問題を解決していきます。

> Reactなどを使わずにHTMLだけで動的なコンテンツを扱うこともできますが、かなり複雑になり、保守しにくいので最近はあまり使われません。

では実際にReactアプリを起動してみましょう。以下のコマンドでアプリを作成できます。（詳細はAIにでも聞いて下さい。）

```bash
npm create vite@latest my-react-app
cd my-react-app
npm install
npm run dev
```


