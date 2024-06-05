import * as types from '../actionTypes/authActionTypes';
import fire from '../../config/firebase';

// Action creators
const loginUser = (payload) => {
  return {
    type: types.SIGN_IN,
    payload
  };
};

const logOutUser = () => {
  return {
    type: types.SIGN_OUT
  };
};

export const signInUser = (email, password, setSuccess) => (dispatch) => {
  fire.auth().signInWithEmailAndPassword(email, password).then((user) => {
    dispatch(loginUser({
      uid: user.user.uid,
      email: user.user.email,
      displayName: user.user.displayName
    }));
    setSuccess(true);
  }).catch((error) => {
    alert("Invalid email or password");
  });
};

export const signUpUser = (name, email, password, setSuccess) => (dispatch) => {
  fire.auth().createUserWithEmailAndPassword(email, password).then((user) => {
    fire.auth().currentUser.updateProfile({
      displayName: name
    }).then(() => {
      const currentUser = fire.auth().currentUser;
      dispatch(loginUser({
        uid: currentUser.uid,
        displayName: currentUser.displayName,
        email: currentUser.email
      }));
      setSuccess(true);
    }).catch((error) => {
      console.error(error);
    });
  }).catch((error) => {
    if (error.code === "auth/email-already-in-use") {
      alert("Email already in use!");
    } else if (error.code === "auth/invalid-email") {
      alert("Invalid email!");
    } else if (error.code === "auth/weak-password") {
      alert("Weak password!");
    } else {
      console.error(error);
    }
  });
};

export const signOutUser = () => (dispatch) => {
  fire.auth().signOut().then(() => {
    dispatch(logOutUser());
  }).catch((error) => {
    console.error(error);
  });
};

export const checkIsLoggedIn = () => (dispatch) => {
  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      dispatch(loginUser({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName
      }));
    }
  });
};
