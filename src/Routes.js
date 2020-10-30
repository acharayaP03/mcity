import React from 'react';
import Layouts from './Hocs/Layouts';
import {Switch} from 'react-router-dom';

import Home from  './Components/Home'
import SignIn from './Components/signin';
import Dashboard from "./Components/admin/dashboard";
import PrivateRoutes from "./Components/AuthRoutes/PrivateRoutes";
import PublicRoutes from "./Components/AuthRoutes/PublicRoutes";
import Admin_Matches from "./Components/admin/AdminMatches";

/**
 * 
 * @param all the props will be passed to the PrivateRoutes which will authenticate if the user is logged in or not.
 *  
 */
const Routes = (props) => {
    console.log(props);
    return (
        <Layouts>
            <Switch>
                <PublicRoutes {...props} exact path="/" component={Home} />
                <PublicRoutes {...props} restricted={true} exact component={SignIn} path="/sign_in"/>
                <PrivateRoutes {...props} restricted={false} exact path="/dashboard" component={Dashboard} />
                <PrivateRoutes {...props} restricted={false} exact path="/admin_matches" component={Admin_Matches} />
            </Switch>
        </Layouts>
    )
}

export default Routes;
