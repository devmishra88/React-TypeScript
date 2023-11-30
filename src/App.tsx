import "./App.css";

import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";

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
      {/* <Greet name="Devesh" messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList}/> */}
      <Status status="error"/>
      <Oscar>
        <Heading>Oscar goes to Breat</Heading>      
      </Oscar>
    </div>
  );
}

export default App;
