import React from 'react'
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import authSelectors from '../redux/auth/authSelectors'


const PrivateRoute = ({
    redirectTo,
    children,
    ...routeProps
}) =>  {
    const isAuthenticated = useSelector(authSelectors.getIsAuthenticated)  
return (
    <Route
    {...routeProps}>
{isAuthenticated ? children : <Redirect to=
{redirectTo}/>}
    </Route>   
)
}


export default PrivateRoute



//если марщрут приватный и пользователь залогинен, рендерит компонент
//в противном случае рендерит Redirect на проп redirectTo, который ему передается с адресом напр "/login"