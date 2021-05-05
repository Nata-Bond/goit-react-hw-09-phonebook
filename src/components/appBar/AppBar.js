import React from 'react'
import Navigation from "../navigation/Navigation"
import UserMenu from "../userMenu/UserMenu"
import AuthNav from "../authNav/AuthNav"
import s from './appBar.module.css'
import {useSelector} from 'react-redux'
import authSelectors from '../../redux/auth/authSelectors'




const AppBar = () => {
    const isAuthenticated = useSelector(authSelectors.getIsAuthenticated)
    return (
        <header className={s.header}>
<Navigation/>
{isAuthenticated ? <UserMenu/> : <AuthNav/>}
            </header>
    );
}


export default AppBar;