import "./App.css";

import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";

function App() {
  const personName = {
    first: `Devesh`,
    last: `Mishra`,
  };
  const nameList = [
    {
      first: `Devesh`,
      last: `Mishra`,
    },
    {
      first: `Sarvesh`,
      last: `Mishra`,
    },
    {
      first: `Pravesh`,
      last: `Mishra`,
    },
  ];

  return (
    <div className="App">
      <Greet name="Devesh" messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList}/>
    </div>
  );
}

export default App;
