import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
// import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import MuseumPage from './views/MuseumPage/MuseumPage.js';
import DetailProductPage from './views/MuseumPage/DetailProductPage/DetailProductPage.js';
import AboutPage from './views/AboutPage/AboutPage.js';
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"

//admin page
import AdminPage from './views/AdminPage/AdminPage';
import UploadPage from './views/AdminPage/UploadPage/UploadPage'

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {

  const design = () => {
    if (window.location.href === 'http://localhost:3000/') {
      return <div style={{display: 'none'}}></div>
    } else {
      return <div style={{ paddingTop: '69px', minHeight: '120px', background: '#282828' }}></div>
    }
  }

  
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
        {design()}
        <Switch>
          <Route exact path="/" component={(LandingPage)} />
          <Route exact path="/museum" component={(MuseumPage)} />
          <Route exact path="/museum/1" component={(DetailProductPage)} />
          <Route exact path="/about" component={(AboutPage)} />
          <Route exact path="/auth/admin" component={(AdminPage)} />
          <Route exact path="/auth/admin/upload" component={(UploadPage)} />
        </Switch>
      <Footer />
    </Suspense>
  );
}

export default App;
