import React, { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import * as movieActions from '../store/actions'

import { useScroll } from '../hooks/useScroll'
import SearchLogo from '../static/images/search-icon.svg'
import NetflixLogo from '../static/images/Netflix_Logo_RGB.png'
import BellLogo from '../static/images/bell-logo.svg'
import DropdownArrow from '../static/images/drop-down-arrow.svg'
import DropdownContent from '../components/DropdownContent'
import { useDispatch, useSelector } from 'react-redux'
import { signInWithGoogle } from '../firebase/firebase'

const Navbar = ({ history }) => {
  const user = useSelector((state) => state.user)
  const searchInput = React.useRef(null)
  const [userInput, setUserInput] = useState('')
  const [scrollDimensions] = useScroll()
  const { scrollY } = scrollDimensions

  const onChange = async (event) => {
    setUserInput(event.target.value)
  }

  const dispatch = useDispatch()

  useEffect(() => {
    if (
      document.activeElement === searchInput.current &&
      userInput.length === 0
    ) {
      history.push('/browse')
    }
    if (userInput.length > 0) history.push(`/search?q=${userInput}`)
  }, [userInput, searchInput])

  const onLogoClick = () => {
    setUserInput('')
  }

  return (
    <nav className={'navigation ' + (scrollY > 50 ? 'black' : '')}>
      <ul className='navigation__container'>
        <NavLink to='/' onClick={() => onLogoClick()}>
          <img
            className='navigation__container--logo'
            src={NetflixLogo}
            alt=''
          />
        </NavLink>
        <DropdownArrow className='navigation__container--downArrow-2'></DropdownArrow>

        <Link to='/discover' className="navigation__container-link pseudo-link" style={{ textDecoration: 'none' }}>
          Home
        </Link>
        <Link to='/discover/popular' className="navigation__container-link pseudo-link" style={{ textDecoration: 'none' }}>
          Popular Movies
        </Link>
        <Link to='/discover/latest' className="navigation__container-link pseudo-link" style={{ textDecoration: 'none' }}>
          Latest Movies
        </Link>
        <Link to='/discover/favorites' className="navigation__container-link pseudo-link" style={{ textDecoration: 'none' }}>
          Favorite Movies
        </Link>

        {user.currentUser ? (
          <>
            {console.log(user)}
            <div className='navigation__container--left'>
              <SearchLogo className='logo' />
              <input
                ref={searchInput}
                value={userInput}
                onChange={(event) => onChange(event)}
                className='navigation__container--left__input'
                type='text'
                placeholder='Title, genres, people'
              />
            </div>

            <div className='navigation__container-link pseudo-link'>Hello, {user.currentUser.displayName}</div>

            <BellLogo className='navigation__container--bellLogo' />

            <DropdownContent />
            <DropdownArrow className='navigation__container--downArrow' />
          </>
        )
          :
          (
            <div className='navigation__container--left'>
              <button
                onClick={signInWithGoogle}
                className='navigation__container--btn'
              >
                Login
              </button>
            </div>
          )}
      </ul>
    </nav>
  )
}

export default withRouter(Navbar)
