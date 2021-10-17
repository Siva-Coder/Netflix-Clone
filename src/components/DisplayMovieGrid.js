import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Container, Row, Col } from 'react-grid-system'

import { useViewport } from '../hooks/useViewport'

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const DisplayMovieGrid = ({ title, isNetflixMovies, movies, selectMovieHandler }) => {
    const [windowDimensions] = useViewport()
    const { width } = windowDimensions

    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Container>
                <Row>
                    {movies &&
                        movies.map((movie, idx) => {
                            let movieImageUrl = isNetflixMovies
                                ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                                : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`

                            if (movie.poster_path && movie.backdrop_path !== null) {
                                return (
                                    <Col sm={3}
                                        onClick={() => selectMovieHandler(movie)}
                                        key={idx}
                                        className={
                                            'movieShowcase__container--grid'
                                        }
                                    >
                                        <img
                                            src={movieImageUrl}
                                            className='movieShowcase__container--movie-image'
                                        />
                                    </Col>
                                )
                            }
                        })}
                </Row>
            </Container>
        </>
    )
}

export default DisplayMovieGrid
