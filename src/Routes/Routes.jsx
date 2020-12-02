import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../Pages/Home'
import Filmes from '../Pages/Filmes'
import Autora from '../Pages/Autora'

const Routes = () => {
    return (
        < BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/filmes' component={Filmes} />
                <Route path='/autora' component={Autora} />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes