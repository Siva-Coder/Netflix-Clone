import React from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../firebase/firebase';
import * as movieActions from '../store/actions'


const dropdownContent = () => {
  const dispatch = useDispatch();

  function handleSignout() {
    auth
      .signOut()
      .then(function () {
        dispatch(movieActions.signIn(null))
        window.location.href = "/";
      })
      .catch(function (error) {
        // An error happened.
      });
  }
  return (
    <div className="dropdownContainer">
      <div className="navigation__container--userLogo">
        <div className="dropdownContent">
          {/* <div>
          <div className="dropdownContent--user"></div>
          <p className="dropdownContent--user-text">Andres</p>
        </div> */}
          <div>
            <p className="dropdownContent--user-text" onClick={() => handleSignout()}>Logout</p>
          </div>
          {/* <div>
          <div className="dropdownContent--user dropdownContent--user-3"></div>
          <p className="dropdownContent--user-text">Luis</p>
        </div> */}
          {/* <p className="dropdownContent-text">Manage Profiles</p> */}
        </div>
        <div className="dropdownContent dropdownContent--2">
          <p className="dropdownContent-textOutside">Account</p>
          <p className="dropdownContent-textOutside">Help Center</p>
          {/* <p className="dropdownContent-textOutside">Sign out of Netflix</p> */}
        </div>
      </div>
    </div>
  )
};

export default dropdownContent;
