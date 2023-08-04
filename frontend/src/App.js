import './App.css';
import CounterClass from './components/counterClass';
import CounterFunction from './components/counterFunction';

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <CounterClass />
      <CounterFunction />
    </div>
  );
}

export default App;
