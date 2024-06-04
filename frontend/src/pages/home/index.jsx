import './index.css'
import { FaTrashCan } from "react-icons/fa6";
import api from '../../services/api';
import { useEffect, useState } from 'react';
export function Home() {
  const [users, setUsers] = useState([])
  
  async function getUsers(){
    setUsers(await api.get('/users'))
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className='container'>
      <form>
        <h1>Cadastro de usuário </h1>
        <input placeholder='Nome:' name='nome' type='text'/> 
        <input placeholder='Idade:' name='idade' type='number'/> 
        <input placeholder='Email:' name='email' type='email'/> 
        <button type="button"> Cadastrar</button>
      </form>

       {users.map(user => {
        return(
          <div key={user.id} className='card'>
            <div>
              <p>Nome: <span>{user.name}</span></p>
              <p>Idade:<span>{user.age}</span> </p>
              <p>Email: <span>{user.email}</span></p>
            </div>
            <button>
              <FaTrashCan size={20} color='red' /> 
            </button>
          </div>
        )
       })}
    </div>
  )
}

