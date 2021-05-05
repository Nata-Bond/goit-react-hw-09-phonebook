import React, {useCallback} from 'react'
import s from './userMenu.module.css'
import authSelectors from '../../redux/auth/authSelectors'
import authOperations from '../../redux/auth/authOperations'
import {useDispatch, useSelector} from 'react-redux'
import avatar from './avatar.png'

const UserMenu = () => {
    const name = useSelector(authSelectors.getUsername)

    const dispatch = useDispatch();
    const onLogout = useCallback(()=>{
        dispatch(authOperations.logOut())
    }, [dispatch])


    return (
        <div className={s.userMenu}>
<img src={avatar} alt={name} width="28" className={s.avatar}/>
<span className={s.name}>Welcome, {name}</span>
<button type="button" onClick={onLogout}>Logout</button>
        </div>
    );
}


export default UserMenu;

