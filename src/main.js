import { changeView } from './lib/controller/ruta.js';

const init = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyCajmbJzVceqL8nc10_MtnMQ72NZE4FHCY",
    authDomain: "proyectopruebacentria.firebaseapp.com",
    databaseURL: "https://proyectopruebacentria.firebaseio.com",
    projectId: "proyectopruebacentria",
    storageBucket: "proyectopruebacentria.appspot.com",
    messagingSenderId: "632019619413",
    appId: "1:632019619413:web:a63fe3111ca33c0ac44edc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};
window.addEventListener('load', init);
