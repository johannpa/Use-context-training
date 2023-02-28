import './App.css';
import RootContext from "./RootContext";
import Child from "./components/Child";


const data = {
  number: 123, 
  text: "ABC",
  func: () => {
    alert("Hello!");
  },
};

function App() {
  return (
    <div className="App">
      <RootContext.Provider value={data}>
        <div style={{padding: 30}}>
          <Child/>
        </div>
      </RootContext.Provider>
    </div>
  );
}

export default App;
