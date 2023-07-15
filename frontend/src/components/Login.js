import React ,{useState} from 'react'

const Login = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    function handleSubmit(e){
        e.preventDefault();
        console.log(email);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>email</label>
            <input type='email' value={email} onChange={(e)=> setemail(e.target.value)}/>
            <label>password</label>
            <input type='password' value={password} onChange={(e)=> setpassword(e.target.value)}/>
            <button>login</button>
        </form>
    </div>
  )
}

export default Login