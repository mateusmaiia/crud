import './index.css'
import { FaTrashCan } from "react-icons/fa6";
import api from '../../services/api';
import { useEffect, useState } from 'react';
import z from 'zod'
import { useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'


const formSchema = z.object({
  name: z.string(),
  age: z.string(),
  email: z.string().email(),
})
export function Home() {
  const [users, setUsers] = useState([])
  const {register, handleSubmit, reset} = useForm({
    resolver: zodResolver(formSchema),
  })

  async function getUsers(){
    const usersFetch = await api.get('/users')
    setUsers(usersFetch.data)
  }

  async function createUsers(data){
    try {
      const userCreated = await api.post("/users", {
        name: data.name,
        age: data.age,
        email: data.email,
      })
      setUsers(prevUsers => [...prevUsers, userCreated.data])
      reset()
    } catch (error) {
      console.error(error)
    }
  }

  async function deleteUser(id){
    await api.delete(`/users/${id}`)
  }

  useEffect(() => {
    getUsers()
  }, [users])

  return (
    <div className='container'>
      <form>
        <h1>Cadastro de usuário </h1>
        <input placeholder='Nome:' name='nome' type='text' {...register("name")}/> 
        <input placeholder='Idade:' name='idade' type='number' {...register("age")}/> 
        <input placeholder='Email:' name='email' type='email' {...register("email")}/> 
        <button type="button" onClick={handleSubmit(createUsers)}> Cadastrar</button>
      </form>

       {users.map(user => {
        return(
          <div key={user.id} className='card'>
            <div>
              <p>Nome: <span>{user.name}</span></p>
              <p>Idade:<span>{user.age}</span> </p>
              <p>Email: <span>{user.email}</span></p>
            </div>
            <button onClick={() => deleteUser(user.id)}>
              <FaTrashCan size={20} color='red' /> 
            </button>
          </div>
        )
       })}
    </div>
  )
}

