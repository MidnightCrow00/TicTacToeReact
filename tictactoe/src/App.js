import { useState } from "react";
import "./App.css";
import Jatekter from "./components/Jatekter";

function App() {
  //react state -leirja program állapotát, ha a stateben megadott változó értéke változik akkor a react frissiti az oldal tartalmát azon a részen ami a változótól függ
  // state létrehozásához useState hook-ot használuk,ami egy beállító függvény
  const [lista, setLista] = useState([
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
  ]);
  const [lepes, setLepes] = useState(0);
  function katt(adat) {
    //itt akarjuk lekezelni,hogy melyik elemre kattintuntunk és mit írjunk a listába
    lista[adat] = "X";
    //a state-ket közvetlenül nem módósíthatjuk csak a beállító függvényen keresztül
    //1. Csinálunk egy másolatott az adatról
    //const slista=lista //ne referencoát adjunk átt, hanem másolatot készítsünk
    const slista = [...lista];
    //2. a másolat módosítása
    if (lepes % 2 == 0) {
      slista[adat] = "X";
    } else {
      slista[adat] = "O";
    }
    let slepes = lepes;
    slepes++;
    setLepes(slepes);
    // setLepes(lepes+1) ez is jó lenne
    //3. a másolatot értékül adjuk az eredetinek
    setLista([...slista]);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>TicTacToe</h1>
      </header>
      <article>
        <Jatekter lista={lista} katt={katt} />
      </article>
      <footer>
        <p>Albert Orsolya</p>
      </footer>
    </div>
  );
}

export default App;
