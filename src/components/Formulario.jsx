import { useState } from "react"

export const Formulario = ({setUsers}) => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "" || password === "") {
            setError(true)
            return
        }
        setName("");
        setPassword("");
        setError(false);
        setUsers([name])
    }

  return (
    <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input 
            type="text" 
            value={name}
            onChange={ (e)=> setName(e.target.value) }
        />

        <input 
            type="password" 
            value={password}
            onChange={ (e)=> setPassword(e.target.value) }
        />
        {error && <p>Todos los campos son obligatorios</p>}
        <button>Iniciar sesión</button>
    </form>
  )
}
