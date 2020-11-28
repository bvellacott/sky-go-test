import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Search } from './Search'
import { Home } from './Home'
import { Details } from './Details'

export const App = () => (
  <>
    <header>
      <h1>Sky movie search test</h1>
    </header>
    <main>
      <Search/>
      <Switch>
        <Route exact path="/:searchType" component={Home} />
        <Route exact path="/details/:mediaType/:id" component={Details} />
      </Switch>
    </main>
    <footer>
      © 2020 SolidKode Ltd. All rights reserved ).
    </footer>
  </>
)
