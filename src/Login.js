import React,{useState} from 'react'

const Login = ( )=> {
    const [name,setName]= useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[newEntry,setNewEntry]= useState([])
    const submitForm =()=>{
         const newEntry ={name:name,email:email,password:password}
         setAllEntry([...allEntry,newEntry])
         console.log(allEntry);
    }

    return (
        <> 
       <form onSubmit={submitForm}>
           <div className='form-inner'>
            <h2>Login</h2>
            <div>
                <label htmlFor='name'>Name</label>
                <input type="text" name="name" id="name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
            <label htmlFor="password">password</label>
            <input type="password" name="password" id="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            </div>
            <button type="submit">Login</button>
           </div>
       </form>
<div>
{
    allEntry.map((curElem)=>{
    return(
        <div>
<p>{curElem.name}</p>
<p>{curElem.email}</p>
<p>{curElem.password}</p>

        </div>
    )
    })
}


</div>

       </>

    )



}

export default Login
