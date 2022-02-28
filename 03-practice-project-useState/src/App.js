import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);
  const addHandler = (newName, newAge) => {
    setUsers((prevState) => {
      return [
        ...prevState,
        { name: newName, age: newAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <>
      <AddUser onAdd={addHandler}></AddUser>
      <UsersList users={users} />
    </>
  );
}

export default App;
