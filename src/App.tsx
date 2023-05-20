import { Border } from "./components";

function App() {
  return (
    <div className="container">
      <h1>Polymorphic Components</h1>
      <Border as="h2">title</Border>
      <Border as="a" href="https://www.google.com">
        link
      </Border>
      <Border>span</Border>
    </div>
  );
}

export default App;
