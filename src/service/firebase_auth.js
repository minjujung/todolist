import firebase from "firebase";
import firebaseApp from "./firebase";

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }

  logout() {
    return firebase.auth().signOut();
  }

  checkState(changed) {
    firebase.auth().onAuthStateChanged((user) => {
      changed(user);
    });
  }
}

export default AuthService;
