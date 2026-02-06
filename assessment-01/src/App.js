import "./App.css";
import TabOne from "./TabOne";
import TabTwo from "./TabTwo";

function App() {
  return (
    <div className="App">
      <header>
        <h1>The power of Tabs</h1>
      </header>

      {/* Tabs */}
      <div className="tabs">
        <button className="tab">Tab 1</button>
        <button className="tab">Tab 2</button>
      </div>

      {/* Body */}
      <div className="tab-body">
        {/* TODO: Please render only one tab based on the button clicked above */}
        <TabOne />
        <TabTwo />
      </div>
    </div>
  );
}

export default App;
