# useStae

先のコンポーネントによって、再利用性の問題は解決しました。ここでは状態管理と動的なUIの実装を行うため、useStateという機能について説明します。

まず、useStateはわすれて思いつく形でカウンターを書いてみます。
```tsx
function App() {
  let count = 0; // カウント数を持つ変数

  // カウントアップの関数
  function increment() {
    count += 1;
  }
  return (
    <div>
      <h1>カウンターアプリ</h1>
      <p>カウント数 : {count}</p>
      <button onClick={increment}>カウントアップ</button>
    </div>
  )
}
```
`increment`関数を呼び出すと、`count`の値が増える、という考えです。しかし、これではブラウザに表示されません。

では、どうすればブラウザに表示されるようになるでしょうか？Reactには、状態管理のための機能が用意されていて、それがuseStateです。useStateを使うと、状態を定義して、その状態が変化したときにブラウザに反映させることができます。

```tsx
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>カウンターアプリ</h1>
      <p>カウント数 : {count}</p>
      <button onClick={increment}>カウントアップ</button>
    </div>
  )
}
```

細かい書き方を説明します。まず、変数を次の形で定義します。
```tsx
// const [変数, 変数を更新する関数] = useState(初期値);
const [count, setCount] = useState(0);
```
`count`や`setCount`は好きな名前をつけることが、慣習的にlower camel caseで、更新する関数は`set変数名`のようにします。


値を変更したいときは
```tsx
count = 1; 
```
ではなく
```tsx
setCount(1);
```
と書きます。これで、`count`の値が1に変更され、ブラウザに反映されます。

useStateを使うことで、

- 値を保存すること
- 値を変更したときにブラウザに反映させること

ができます。（厳密な話をすると奥が深いのですが、それはまたあとの章で。）


これがReactの基本的な状態管理です。
