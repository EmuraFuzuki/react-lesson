# TypescriptとjavaScript

JavaScript (以下jsと表記)はブラウザ上で動作するプログラミング言語で、Webアプリを制作する場合はほぼ必須の言語です。ReactもJavaScript用のライブラリです。jsの書き方はここでは説明しないのでご自分で調べてみてください。

jsは動的型付け言語であり、コーディング時に型を指定できず、事前にエラーを検出することがむずかしいです。

```javascript
let x = 10
x = "hello" // 違う種類の値を同じ変数に代入できてしまう
```

そこで利用されるのがTypeScript (以下tsと表記)です。tsはjsに型システムを追加した言語で、型エラーを事前に検出できるようになります。tsはjsにトランスパイルされるため、ブラウザ上で動作します。Reactはtsでも利用できるようになっています。

> 型システムについてはあとの章で説明します。以下は簡単な例です。
```typescript
// 変数
let x: number = 10
x = "hello" // エラー: 型 'string' を型 'number' に割り当てることはできません。

// 関数
function add(a: number, b: number): number {
  return a + b
}

// オブジェクト
type User = {
  name: string
  age: number
}

const user: User = {
  name: "cosmos",
  age: 20
}
```
