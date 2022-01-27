import logo from './logo.svg';
import './App.css';
import Fibonacci from './fibonacci';
import LinkedList from './linkedList';
import DataTransformer from './dataTransformer';
import DebounceAndThrottle from './debounceAndThrottle';

function App() {
  return (
    <div className="App">
      <div className='container'><Fibonacci /></div>
      <div className='container'><LinkedList /></div>
      <div className='container'><DataTransformer /></div>
      <div className='container'><DebounceAndThrottle /></div>
    </div>
  );
}

export default App;
