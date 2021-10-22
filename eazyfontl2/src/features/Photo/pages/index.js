import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router';
import MainPage from './Main/MainPage';
import AddEditPage from './AddEdit/AddEditPage';
import NotFound from '../../../components/NotFound';

Photo.propTypes = {
    
};

function Photo(props) {
    const match = useRouteMatch();
    console.log({match});
    
    return (
        <Switch>
            <Route exact path={match.url} component={MainPage}/>
            
            <Route exact path={`${match.url}/add`} component={AddEditPage}/>
            <Route exact path={`${match.url}/:photoId`} component={AddEditPage}/>
            
            <Route  component={NotFound}/>
        </Switch>
    );
}

export default Photo;