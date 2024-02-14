import "./App.css";
import Card from "./components/Card";
function App() {
  return (
    <>
      <h1 className="bg-orange-500 text-red p-4  cursor-pointer mb-3">
        Hello Soyal!
      </h1>
      <Card channel="Soyal"/>
      <Card/>
    </>
  );
}

export default App;
