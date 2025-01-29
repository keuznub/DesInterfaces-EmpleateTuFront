import React, { ChangeEvent, FormEvent, useState } from 'react'

function Register() {
  interface IForm{
    email:string,
    password:string
  }
  const [form,setForm] = useState<IForm>({email:'',password:''})

  const handleSubmit = async (e:FormEvent)=>{
    e.preventDefault()
    const response = await fetch("http://localhost:3000/api/auth/register")
    const data = response.json()
    
  }

  const handleFormChange = (e:ChangeEvent<HTMLInputElement>)=>{
    const {name, value} = e.target
    setForm({
      ...form, [name]:value
     })
  }


  return <>
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input name='name' value={form?.email} onChange={handleFormChange} />
      </label>
      <label>
        Password:
        <input type="password" name='password' value={form?.password} onChange={handleFormChange} />
      </label>
      <button>Register</button>
    </form>
  </>
}

export default Register