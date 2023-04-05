import MyButton from './components/MyButton';
import Profile from './components/Profile';
import ShoppingList from './components/ShoppingList';
import TicTacToe from './components/TicTacToe';
import logo from './logo.svg';
import FilterableProductTableExample from './components/FilterableProductTable'

function App() {
  return (
    <div className="App">
      <h1>Welcome to learn react page, that codebase from react.dev docs</h1>
      <br />
      {/* <TicTacToe /> */}
      <FilterableProductTableExample />
      {/* <MyButton /> */}
      {/* <Profile /> */}
      {/* <ShoppingList /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
