import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as movieActions from '../store/actions'

import Header from './Header'
import Modal from './UI/Modal'
import ModalMovieDetails from './ModalMovieDetails'
import DisplayMovieGrid from './DisplayMovieGrid'

const Latest = () => {
    const trending = useSelector((state) => state.trending)
    const [toggleModal, setToggleModal] = useState(false)
    const [movieDetails, setMovieDetails] = useState({})

    const selectMovieHandler = async (movie) => {
        setToggleModal(true)
        setMovieDetails(movie)
    }
    const closeModal = () => {
        setToggleModal(false)
    }

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(movieActions.fetchTrending())
    }, [dispatch])

    return (
        <div className='container'>
            <div className='movieShowcase'>
                <DisplayMovieGrid
                    title='Trending'
                    selectMovieHandler={selectMovieHandler}
                    movies={trending.data}
                />
            </div>
            <Modal
                show={toggleModal}
                modalClosed={closeModal}
                backgroundImage={movieDetails.backdrop_path || movieDetails.poster_path}
            >
                <ModalMovieDetails movie={movieDetails} />
            </Modal>
        </div>
    )
}

export default Latest
