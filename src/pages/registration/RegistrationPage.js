import React, {useState} from 'react'
import s from './form.module.css'
import {useDispatch} from 'react-redux'
import authOperations from './../../redux/auth/authOperations'


const RegistrationPage = () => {
    const [name, setName] = useState('')
    const updateName = (e)=> {
      setName(e.target.value)  
    }

const [email, setEmail] = useState('')
const updateEmail = (e)=> {
    setEmail(e.target.value)  
}

const [password, setPassword] = useState('')
const updatePassword = (e)=> {
    setPassword(e.target.value)
}
const dispatch = useDispatch()

const handleSubmit = (e)=> {
    e.preventDefault();
    dispatch(authOperations.register({name, email, password}));
}
 



    return (
        <div>
        <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label className={s.label}>
                Name
                <input type='text' className={s.input} name='name' value={name} onChange={updateName}/>
            </label>
            <label className={s.label}>
                Email
                <input type='email' className={s.input}  name='email' value={email} onChange={updateEmail}/>
            </label>
            <label className={s.label}>
                Password
                <input type='password' className={s.input}  name='password' value={password} onChange={updatePassword}/>
            </label>
            <button type="submit" className={s.button}>Enter</button>
        </form>
         </div>  
    );
 }
export default RegistrationPage;

