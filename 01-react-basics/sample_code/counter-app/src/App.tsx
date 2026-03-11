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
export default App
