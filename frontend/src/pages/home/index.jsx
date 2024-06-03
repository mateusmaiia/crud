import './index.css'
import { FaTrashCan } from "react-icons/fa6";

export function Home() {

  const users = [
    {
    id: 'isodj01238012',
    name: "Maia Mateues",
    age: "20",
    email: "maia@gmail.com"
  },
  {
    id: 'isdoawdadj01238012',
    name: "Amna",
    age: "23",
    email: "amna@gmail.com"
  }
]

  return (
    <div className='container'>
      <form>
        <h1>Cadastro de usuário </h1>
        <input name='nome' type='text'/> 
        <input name='idade' type='number'/> 
        <input name='email' type='email'/> 
        <button type="button"> Cadastrar</button>
      </form>

       {users.map(user => {
        return(
          <div key={user.id}>
            <div>
              <p>Nome: {user.name}</p>
              <p>Idade: {user.age}</p>
              <p>Email: {user.email}</p>
            </div>
            <span>
              <FaTrashCan size={20} /> 
            </span>
          </div>
        )
       })}
    </div>
  )
}

