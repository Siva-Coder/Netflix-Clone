import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Search from './pages/Search'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Popular from './components/Popular'
import { auth } from './firebase/firebase'
import { useDispatch } from 'react-redux'
import * as movieActions from './store/actions'


const AppRouter = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(movieActions.signIn(authUser))
      } else {
        // dispatch(movieActions.signIn(null))
      }
    });
    return () => {
      unsubscribe();
    };
  }, [auth]);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' exact render={() => <Redirect to='/discover' />} />
        <Route path='/discover' component={Home} />
        <Route path='/search' component={Search} />
        {/* <Route path='/discover/popular' component={Popular} /> */}
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRouter
