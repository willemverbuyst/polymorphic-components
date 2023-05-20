import { Border } from "./components";

function Emphasis({ children }: { children: string }) {
  return <em>{children}</em>;
}

function App() {
  return (
    <div className="container">
      <h1>Polymorphic Components</h1>
      <Border as="h2" color="violet" style={{ backgroundColor: "#ddd" }}>
        title
      </Border>
      <Border as="a" href="https://www.google.com">
        link
      </Border>
      <Border>span</Border>
      <Border as={Emphasis}>custom component</Border>
    </div>
  );
}

export default App;
