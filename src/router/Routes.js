import { useRoutes, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import QueryDemo from '../pages/QueryDemo';
import { useAuth } from '../hooks';



const routes = (token) => {
    const publicRoutes = [
        {
            path: '/',
            element:  <Home />,
        },
    ];
    const privateRoutes = [
        {
            path: '/query-demo',
            element: token ? <QueryDemo /> : <Navigate to='/' />,
        },
    ];
    return [...publicRoutes, ...privateRoutes];
};

const Routes = () => {
    const {token} = useAuth();
    const myroutes = useRoutes(routes(token));
    return myroutes;
};

export default Routes;



// without auth guards
// const routes=useRoutes([...allRoutes])
// return routes