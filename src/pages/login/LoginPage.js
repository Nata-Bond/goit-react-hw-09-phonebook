import React, {useState} from 'react'
import s from "./../registration/form.module.css"
import {useDispatch} from 'react-redux'
import authOperations from "./../../redux/auth/authOperations"

const LoginPage = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const updateEmail = (e) => {
    setEmail(e.target.value)
}
const updatePassword = (e) => {
    setPassword(e.target.value)
}

const dispatch = useDispatch()

const handleSubmit = (e)=> {
    e.preventDefault();
    dispatch(authOperations.logIn({email, password}));

}

    return (
        <div>
        <form className={s.form} onSubmit={handleSubmit}>
            <label className={s.label}>
                Email
                <input type='email' className={s.input} name='email' value={email} onChange={updateEmail}/>
            </label>
            <label className={s.label}>
                Password
                <input type='password' className={s.input} name='password' value={password} onChange={updatePassword}/>
            </label>
            <button className={s.button} type="submit" >Enter</button>
        </form>
                   </div>   
    );
}



export default LoginPage