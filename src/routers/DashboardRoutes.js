import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Header } from '../components/Header/Header';
import { MoviesDetails } from '../views/MoviesDetail/MoviesDetails';
import { MoviesList } from '../views/MoviesList/MoviesList';

export const DashboardRoutes = () => {
    return (
        <>
           <Header />

            <div className="movies-content">
                <Switch>
                    <Route exact path="/movies" component={ MoviesList } />
                    <Route exact path="/movies-detail/:movieId" component={ MoviesDetails} />
                    <Redirect to="/movies" />
                </Switch>
            </div>


        </>
    )
}