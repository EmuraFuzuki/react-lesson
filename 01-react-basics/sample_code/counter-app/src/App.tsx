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
