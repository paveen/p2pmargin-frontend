import React,{useEffect} from 'react'
import jwt from 'jsonwebtoken'
import {useHistory} from 'react-router-dom'

const Dashboard = () => {

    const history=useHistory()

    useEffect(()=>{
        const token=localStorage.getItem('token')
        if(token){
            const user=jwt.decode(token)
            if(!user){
                localStorage.removeItem(token)
                history.replace("/login")
            }
        }

    }, [])

    return (
        <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-5xl font-bold text-blue-450">Welcome to COINFINIT</h1>
    </div>
    )
}

export default Dashboard
