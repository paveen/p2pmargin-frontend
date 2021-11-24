import React,{useState} from 'react';
const Login = () => {


    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function loginUser(event){
        event.preventDefault()
        const response = await fetch('http://localhost:1337/api/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email,
                password,
            }),
        })

        const data = await response.json()

        if(data.user){
            alert('Login Sucessfull')
            window.location.href='/dashboard'
        }
        else{
            alert('Please check your username and password')
        }
        console.log(data);
    }














    return (
        <div>
            <div className="min-h-full p-16 flex items-center justify-center">
            <div className="bg-white p-2 rounded w-1/2">
                <h1 className="text-5xl font-bold p-4 ml-48 mb-10 text-blue-450">Login</h1>
                <form className="space-y-6" onSubmit={loginUser}>
                    <div>
                        <label className="block mb-2 font-bold text-xl">Email</label>
                        <input type="email" 
                        value={email} 
                        onChange={(e)=> setEmail(e.target.value)}
                        className="border-2 
                        border-blue-450 
                        py-2 px-4 w-full 
                        rounded-md outline-none 
                        focus:border-blue-400"/>
                    </div>
                    <div>
                        <label className="block mb-2 font-bold text-xl">Password</label>
                            <input type="password" 
                            value={password} 
                            onChange={(e)=> setPassword(e.target.value)}
                            className="border-2 
                            border-blue-450 
                            py-2 px-4 w-3/4
                            rounded-md outline-none 
                            focus:border-blue-400 "/>
                             <input type="submit"
                            className="font-sans 
                            text-md px-8
                            py-3 rounded-md 
                            ml-4
                            text-white border-transparent 
                            hover:text-teal-500 bg-skyblue-450"
                            value="Login"
                            />
                    </div>
                </form>

            </div>
            
        </div>
        </div>
    )
}

export default Login
