import './App.css';

function Usuario(props){
  return <h1>{props.texto}</h1>;
}

function App() {
  return (
    <div>
      <header class='App-header'>
        <Usuario texto='nome' />
        <Usuario texto='comentário' />
      </header>
    </div>
  );
}

export default App;