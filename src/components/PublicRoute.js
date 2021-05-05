import React from 'react'
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import authSelectors from '../redux/auth/authSelectors'


const PublicRoute = ({
    redirectTo,
    children,
    ...routeProps
}) => {
     const isAuthenticated = useSelector(authSelectors.getIsAuthenticated)
    return (
    <Route {...routeProps}> 
    {isAuthenticated && routeProps.restricted ? (
    <Redirect to={redirectTo}/>
        ) :(
          children
        )} 
        </Route>
        );
}




export default PublicRoute;


// если маршрут ограниченный и пользователь залогинен, рендерит редирект на проп redirectTo
// в противном случае рендерит компонент