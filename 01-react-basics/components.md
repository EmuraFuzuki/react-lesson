# コンポーネント

さて、ここまでは簡単なお話をしてきましたが、ここからReactについて具体的なコードを学んでいきましょう。
関数、変数、クラスなどのプログラミングの基本概念を理解していること、htmlとcssがかけること、を前提で話を進めていきます。

## コンポーネントとは？

Reactのコンポーネントは、UIを構築するための**再利用可能な部品**です。コンポーネントは、tsの関数として定義され、HTMLのような構文でUIを記述することができます。

先のコードの
```tsx
function App() {
  return (
    <div><h1>カウンターアプリ</h1></div>
  )
}
```
において、`App`はコンポーネントの名前で、`function App() { ... }`はコンポーネントの定義です。main.tsxを見ると、`<App />`のようにhtmlのタグのように利用していることがわかります。

## コンポーネントの書き方

では実際にコンポーネントを定義してみましょう。

```tsx
// App.tsx

function Greeting() {
  return <h1>Hello, World!</h1>;
}

function App() {
  return (
    <div>
      <h1>カウンターアプリ</h1>
      <Greeting />
    </div>
  )
}

export default App;
```

これが最小のコンポーネントの例です。`Greeting`というコンポーネントを定義して、`App`コンポーネントの中で利用しています。これでブラウザに「カウンターアプリ」と「Hello, World!」が表示されるはずです。

コンポーネントを利用することで、繰り返し同じ記述をすることを避けることが出来ます。
```tsx
function App() {
  return (
    <div>
      <h1>カウンターアプリ</h1>
      <Greeting />
      <Greeting />
      <Greeting />
      <Greeting />
    </div>
  )
}
```
のようにすれば、同じ内容を4回表示することができます。これがコンポーネントの再利用性の一例です。
再利用することで、

- コードが長いときに重複して書かなくて良くなる
- コードの変更があったときに、コンポーネントを変更するだけで済む

という利点があります。（このあたりはあとの章で詳しく離します。）

コンポーネントには引数を渡すことが出来ます。

```tsx
// App.tsx
function Greeting(props: { name: string }) {
  return <h1>Hello, {props.name}!</h1>;
}
function App() {
  return (
    <div>
      <h1>カウンターアプリ</h1>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
      <Greeting name="Charlie" />
      <Greeting name="David" />
    </div>
  )
}
```

また、コンポーネントには特殊な引数`children`が存在します。`children`は、htmlの入れ子構造を表現するための引数です。
実際のコードを見るとわかると思います。型は`React.ReactNode`です。
```tsx 
function Container(props: { children: React.ReactNode }) {
  return (
    <div>
      <h2>Container</h2>
      <p>-- start --</p>
      <div className="container">{props.children}</div>
      <p>-- end --</p>
    </div>
  );
}

function Greeting(props: { name: string }) {
  return <h1>Hello, {props.name}!</h1>;
}
function App() {
  return (
    <div>
      <h1>カウンターアプリ</h1>
      <Container>
        <Greeting name="Alice" />
        <Greeting name="Bob" />
        <Greeting name="Charlie" />
        <Greeting name="David" />
      </Container>
    </div>
  )
}
export default App
``` 
このように、`Container`コンポーネントの中に`Greeting`コンポーネントを入れ子にすることができます。これが`children`の役割です。
