import { useRef } from "react";
import { Border } from "./components";

function Emphasis({ children }: { children: string }) {
  return <em>{children}</em>;
}

function App() {
  const ref1 = useRef<HTMLAnchorElement | null>(null);
  const ref2 = useRef<HTMLHeadingElement | null>(null);

  return (
    <div className="container">
      <h1>Polymorphic Components</h1>
      <Border
        as="h2"
        color="violet"
        ref={ref2}
        style={{ backgroundColor: "#ddd" }}
      >
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
