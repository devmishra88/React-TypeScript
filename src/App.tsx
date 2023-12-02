import "./App.css";
import { Button } from "./components/Button";

import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
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
      <Greet name="Devesh" isLoggedIn={true} />
      <Button handleClick={(event, id)=>{
        console.log(`I am Devesh`,event, id)
      }} />
      <Input value="" handleChange={event=>console.log(event)}/>
    </div>
  );
}

export default App;
