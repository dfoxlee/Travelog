import './App.css';
import Banner from "./Components/Banner";
import Card from "./Components/Card";
import data from "./data";

function App() {
  const info = data.map((obj)=> {
    return(
      <Card
        key={obj.id}
        obj={obj}
      />
    );
  });

  return (
    <div className="App">
      <Banner />
      <div className="App--card-container">
        {info}
      </div>
    </div>
  );
}

export default App;
