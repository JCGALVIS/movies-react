import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Header } from "../components/Header/Header";
import { MoviesList } from '../views/MoviesList/MoviesList';

export const DashboardRoutes = () => {
    return (
        <>
           <Header />

            <div className="movies-content">
                <Switch>
                    <Route exact path="/movies" component={ MoviesList } />
                    <Redirect to="/movies" />
                </Switch>
            </div>


        </>
    )
}