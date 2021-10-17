import React, { useState } from 'react'

import MainContent from '../components/MainContent'
import Modal from '../components/UI/Modal'
import ModalMovieDetails from '../components/ModalMovieDetails'
import { Route, Switch } from 'react-router-dom'
import Popular from '../components/Popular'
import NotFound from './NotFound'
import Latest from '../components/Latest'

const Discover = () => {
  const [toggleModal, setToggleModal] = useState(false)
  const [movieDetails, setMovieDetails] = useState({})

  const selectMovieHandler = async (movie) => {
    setToggleModal(true)
    setMovieDetails(movie)
  }

  const closeModal = () => {
    setToggleModal(false)
  }

  return (
    <>
      <div className='main-content'>
        <MainContent selectMovieHandler={selectMovieHandler} />
      </div>
      <Modal
        show={toggleModal}
        modalClosed={closeModal}
        backgroundImage={movieDetails.backdrop_path || movieDetails.poster_path}
      >
        <ModalMovieDetails movie={movieDetails} />
      </Modal>
    </>
  )
}

const Home = () => {
  return (
    <Switch>
      <Route path='/discover' exact component={Discover} />
      <Route path='/discover/popular' component={Popular} />
      <Route path='/discover/latest' component={Latest} />
      <Route path="*" component={NotFound} />
    </Switch>
  )
}

export default Home
