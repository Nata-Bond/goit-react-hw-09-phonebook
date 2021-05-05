
import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './navigation.module.css';
import {useSelector} from 'react-redux'
import authSelectors from '../../redux/auth/authSelectors'

const Navigation = () => {
    const isAuthenticated = useSelector(authSelectors.getIsAuthenticated)
    return (

        <div>
            <NavLink to='/' exact className={s.link} activeClassName={s.activeLink}> 
                Home
            </NavLink>
            { isAuthenticated && <NavLink
            to='/contacts' exact className={s.link} activeClassName={s.activeLink}>Contacts</NavLink>}
        </div>
    );
}


export default Navigation;



