import React,{useState,useMemo} from 'react'
import Select from "react-select";
import countryList from 'react-select-country-list'
// const Register=()=>{
//     const handleFormSubmi=()=>{
//         let nickname=e.target.elements.text?.value

//     }
// };

const Registration= () => {
    const [nickname,setNickname]=useState('')
    const [invitecode,setInviteCode]=useState('')
    const [country,setCountry]=useState('')
    const [email,setEmail]=useState('')
    const [code,setCode]=useState('')
    const [phone,setPhone]=useState('')
    const [phonecode,setPhoneCode]=useState('')
    const [password,setPassword]=useState('')

        // const options = useMemo(() => countryList().getData(), [])
        // const changeHandler = country => {
        //   setCountry(country)
        // }


    async function sendEmailOtp(event)
    {
        event.preventDefault()
        const response = await fetch('http://localhost:1337/api/emailotp',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email
            }),
        })
        const data = await response.json()
        if(data){
            alert("Please check your email")
        }else{
            alert("Something went wrong")
        }
        console.log(data);
    }


    async function confirmEmailOtp(event)
    {
        event.preventDefault()
        const response = await fetch('http://localhost:1337/api/emailverify',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                code
            }),
        })
        const data = await response.json()
        if(data.data){
            alert("Email verified")
        }else{
            alert("Incorrect Otp")
        }
        console.log(data);
    }

    async function registerUser(event){
        event.preventDefault()
        const response = await fetch('http://localhost:1337/api/register',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                nickname,
                invitecode,
                country,
                email,
                phone,
                password,
            }),
        })

        const data = await response.json()
        if(data){
            alert("Registration Sucessfull,please Login")
            window.location.href='/login'
        }else{
            alert("Please fill the correct details")
        }
        console.log(data);
    }



    return (
        <div className="min-h-full p-16 flex items-center justify-center">
            <div className="bg-white p-2 rounded w-1/2">
                <h1 className="text-5xl font-bold p-4 ml-48 mb-10 text-blue-450">Register</h1>
                <form className="space-y-6" onSubmit={registerUser}>
                    <div>
                        <label className="block mb-2 font-bold text-xl">Nick Name</label>
                        <input type="text" 
                        value={nickname}  
                        onChange={(e)=> setNickname(e.target.value)}
                        placeholder="Enter your nickname"
                        className="border-2 
                        border-blue-450 
                        py-2 px-4 w-full 
                        rounded-md outline-none 
                        focus:border-blue-400"/>
                    </div>
                    <div>
                    <label className="block mb-2 font-bold text-xl">Invite Code</label>
                        <input type="text" 
                        value={invitecode}
                        onChange={(e)=> setInviteCode(e.target.value)}
                        placeholder="Enter your invite code" 
                        className="border-2 
                        border-blue-450 
                        py-2 px-4 w-full 
                        rounded-md outline-none 
                        focus:border-blue-400"/>
                    </div>
                    <div>
                    <label className="block mb-2 font-bold text-xl">Country</label>
                        <input type="text" 
                        value={country} 
                        onChange={(e)=> setCountry(e.target.value)}
                        placeholder="Your country" 
                        className="border-2 
                        border-blue-450 
                        py-2 px-4 w-full 
                        rounded-md outline-none 
                        focus:border-blue-400"/>
                        {/* <Select
                          options={options}
                          value={country} 
                          onChange={changeHandler}
                          className="border-2 
                          w-full 
                          rounded-md
                          border-blue-450"
                        /> */}
                    </div>
                    <div>
                           {/* Code input Component */}
                           <label className="block mb-2 font-bold text-xl">Email</label>
                            <input type="text" 
                            value={email} 
                            onChange={(e)=> setEmail(e.target.value)}
                            placeholder="Enter your email" 
                            className="border-2 
                            border-blue-450 
                            py-2 px-4 w-3/4
                            rounded-md outline-none 
                            focus:border-blue-400 "/>
                             <button type="submit"
                             onClick={sendEmailOtp}
                             className="font-sans 
                             text-md px-8
                             py-3 rounded-md ml-4
                           text-white border-transparent 
                             hover:text-teal-500 bg-skyblue-450">Request</button>
                       </div>
                        <div>
                            {/* Confirm Code Input Component */}
                            <label className="block mb-2 font-bold text-xl">Email-Code</label>
                            <input type="text" 
                            value={code} 
                            onChange={(e)=> setCode(e.target.value)}
                            placeholder="Secret code from email" 
                            className="border-2 
                            border-blue-450 
                            py-2 px-4 w-3/4
                            rounded-md outline-none 
                            focus:border-blue-400 "/>
                            <button type="submit"
                            onClick={confirmEmailOtp}
                             className="font-sans 
                             text-md px-8
                             py-3 rounded-md ml-4
                           text-white border-transparent 
                             hover:text-teal-500 bg-skyblue-450">Confirm</button>
                        </div>
           
                       <div>
                           {/* Code input Component */}
                           <label className="block mb-2 font-bold text-xl">Phone</label>
                            <input type="tel"
                            value={phone} 
                            onChange={(e)=> setPhone(e.target.value)}
                            placeholder="Enter your number" 
                            className="border-2 
                            border-blue-450 
                            py-2 px-4 w-3/4
                            rounded-md outline-none 
                            focus:border-blue-400 "/>
                             <button type="submit"
                             className="font-sans 
                             text-md px-8
                             py-3 rounded-md ml-4
                           text-white border-transparent 
                             hover:text-teal-500 bg-skyblue-450">Request</button>
                       </div>
                        <div>
                            {/* Confirm Code Input Component */}
                            <label className="block mb-2 font-bold text-xl">Phone-Code</label>
                            <input type="text" 
                            value={phonecode} 
                            onChange={(e)=> setPhoneCode(e.target.value)}
                            placeholder="Secret code from number" 
                            className="border-2 
                            border-blue-450 
                            py-2 px-4 w-3/4
                            rounded-md outline-none 
                            focus:border-blue-400 "/>
                            <button type="submit"
                             className="font-sans 
                             text-md px-8
                             py-3 rounded-md ml-4
                           text-white border-transparent 
                             hover:text-teal-500 bg-skyblue-450">Confirm</button>
                        </div>

                        <div>
                           <label className="block mb-2 font-bold text-xl">Password</label>
                            <input type="password" 
                            value={password} 
                            onChange={(e)=> setPassword(e.target.value)}
                            placeholder="Use strong alphnumeric password"
                            className="border-2 
                            border-blue-450 
                            py-2 px-4 w-full
                            rounded-md outline-none 
                            focus:border-blue-400 "/>  
                     </div>

                        {/* Register Button Component */}
                    <div className="ml-48 mt-16">
                        <button type="submit"
                        className="font-sans 
                        text-md px-8
                        py-3 rounded-md 
                      text-white border-transparent 
                        hover:text-teal-500 bg-skyblue-450">Register</button>
                    </div>
                </form>

            </div>
            
        </div>
    )
}
export default Registration