import { useState } from "react";
import { Formulario } from "./components/Formulario";
import { Home } from "./components/Home";

export const App = () => {

  const [users, setUsers] = useState([])
  
  return (
    <div className="App">
      {
        users.length <= 0 
        ? <Formulario setUsers={setUsers}/>
        : <Home users={users} setUsers={setUsers}/>
      }
    </div>
  );
};
