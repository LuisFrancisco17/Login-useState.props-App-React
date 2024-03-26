import React from "react";

export const Home = ({ users, setUsers }) => {
  
  const handleLogout = () => {
    setUsers([]);
  };

  return (
    <>
      <h2>Bienvenido {users}</h2>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </>
  );
};
