import { Border } from "./components";

function App() {
  return (
    <div className="container">
      <h1>Polymorphic Components</h1>
      <Border as="h2">test</Border>
    </div>
  );
}

export default App;
