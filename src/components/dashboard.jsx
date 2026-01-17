import { useState } from "react";
import { auth } from '../firebase/config';
import {useNavigate} from 'react-router-dom'

export default function Dashboard(){
    const navigate = useNavigate();
    const user = auth.currentUser;
    function CreateStuff(){
        navigate('/create')
    }
    return(
        <>
            <h1> Welcome, {user?.email}! </h1>
            <button onClick={() => navigate('/login')}>Log Out</button>
            <button onClick={() => CreateStuff()}>
                Create New Event
            </button>
        </>
    )
}