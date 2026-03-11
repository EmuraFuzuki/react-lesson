# プロジェクトの作成

では実際にReactアプリを起動してみましょう。ここではnpmとviteを使用してプロジェクトを作成します。他にもツールはいくつかあるので気になったら調べてみてください。

以下のコマンドでアプリを作成できます。パッケージマネージャーなどの説明は省略しますので、AIに質問するかネットで調べるかしてください。

```bash
npm create vite@latest my-react-app
cd my-react-app
npm install
npm run dev
```

色々なファイルが作成されますが、とりあえずは`src/App.tsx`だけ見てみましょう。ここにアプリのコードが書いてあります。まずは`App.tsx`を以下のように書き換えてみてください。

```tsx
function App() {
  return (
    <div><h1>カウンターアプリ</h1></div>
  )
}

export default App;
```
するとブラウザに「カウンターアプリ」と表示されるはずです。これでReactアプリの起動は完了です。

