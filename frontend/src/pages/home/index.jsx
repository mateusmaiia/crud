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

