
import './App.css';

function App() {
  function handleClick(){
    console.log('hover clicked');
  }
  return (
    <div className="App">
      <button onClick={handleClick}>
        Hover on me!
      </button>
    </div>
  );
}

export default App;
