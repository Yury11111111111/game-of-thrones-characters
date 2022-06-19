import "./App.css";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Character from "./components/Character";
import Filter from "./components/Filter";
import {
  AllFun,
  LannisterFun,
  TargaryenFun,
  GreyjoyFun,
  StarkFun,
  BaratheonFun,
  FreyFun,
  TullyFun,
  MartellFun,
  MormontFun,
  TyrellFun,
  UmberFun,
  TarlyFun,
} from "./components/Filter";
function App() {
  const [characters, setCharacters] = useState([]);
  const [limit, setLimit] = useState(100);
  const [more, setMore] = useState(99);


  function plusLimit() {
    setLimit((limit) => limit + 100);
    setMore((more) => more + 100);
  }
  setTimeout(() => {
    if (AllFun()) {
      fetch(`http://localhost:4000/characters?_limit=${limit}`)
        .then((response) => response.json())
        .then((data) => setCharacters(data));
    }
  }, 1);

  if (LannisterFun()) {
    fetch(
      `http://localhost:4000/characters?_limit=${limit}&houseName=Lannister`
    )
      .then((response) => response.json())
      .then((data) => setCharacters(data));
  }

  if (TargaryenFun()) {
    fetch(
      `http://localhost:4000/characters?_limit=${limit}&houseName=Targaryen`
    )
      .then((response) => response.json())
      .then((data) => setCharacters(data));
  }
  if (GreyjoyFun()) {
    fetch(`http://localhost:4000/characters?_limit=${limit}&houseName=Greyjoy`)
      .then((response) => response.json())
      .then((data) => setCharacters(data));
  }
  if (StarkFun()) {
    fetch(`http://localhost:4000/characters?_limit=${limit}&houseName=Stark`)
      .then((response) => response.json())
      .then((data) => setCharacters(data));
  }
  if (BaratheonFun()) {
    fetch(
      `http://localhost:4000/characters?_limit=${limit}&houseName=Baratheon`
    )
      .then((response) => response.json())
      .then((data) => setCharacters(data));
  }
  if (FreyFun()) {
    fetch(`http://localhost:4000/characters?_limit=${limit}&houseName=Frey`)
      .then((response) => response.json())
      .then((data) => setCharacters(data));
  }
  if (TullyFun()) {
    fetch(`http://localhost:4000/characters?_limit=${limit}&houseName=Tully`)
      .then((response) => response.json())
      .then((data) => setCharacters(data));
  }
  if (MartellFun()) {
    fetch(`http://localhost:4000/characters?_limit=${limit}&houseName=Martell`)
      .then((response) => response.json())
      .then((data) => setCharacters(data));
  }
  if (MormontFun()) {
    fetch(`http://localhost:4000/characters?_limit=${limit}&houseName=Mormont`)
      .then((response) => response.json())
      .then((data) => setCharacters(data));
  }
  if (TyrellFun()) {
    fetch(`http://localhost:4000/characters?_limit=${limit}&houseName=Tyrell`)
      .then((response) => response.json())
      .then((data) => setCharacters(data));
  }
  if (UmberFun()) {
    fetch(`http://localhost:4000/characters?_limit=${limit}&houseName=Umber`)
      .then((response) => response.json())
      .then((data) => setCharacters(data));
  }
  if (TarlyFun()) {
    fetch(`http://localhost:4000/characters?_limit=${limit}&houseName=Tarly`)
      .then((response) => response.json())
      .then((data) => setCharacters(data));
  }

  return (
    <div className="App">
      <Container className="container">
        <h1 className="title">Персонажи Игры престолов</h1>

        <Filter />
        <div className="charachersBlock">
          {characters.map((character, index) => {
            return <Character character={character} link={index} key={index} />;
          })}
        </div>
        {more < characters.length ? (
          <button className="more" onClick={plusLimit}>
            загрузить ещё
          </button>
        ) : (
          <></>
        )}
      </Container>
    </div>
  );
}

export default App;
