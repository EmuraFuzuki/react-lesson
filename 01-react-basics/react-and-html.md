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

## React

HTML単独では3つの問題があります。

1. 動的なコンテンツを扱うのが苦手
2. 再利用性が低い
3. 状態管理が難しい

そこでReactやVueなどのフレームワークを利用してその問題を解決していきます。

> Reactなどを使わずにHTMLだけで動的なコンテンツを扱うこともできますが、かなり複雑になり、保守しにくいので最近はあまり使われません。

Reactでは以下のように記述します。

```jsx
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <p>This is a web page.</p>
    </div>
  )
}
```

記法の詳細はこれ以降の章で説明していきます。雑な説明をすると、関数の返り値にHTMLの一部を書くと、ReactがそれをHTMLに変換してブラウザに表示してくれます。

ReactはJavaScriptの関数でHTMLを記述できるようにするため、

- 変数を利用することでコンテンツを動的に扱う
- 関数として切り出すことで再利用できる
- 状態管理のための機能が利用しやすい

などの特徴があります。