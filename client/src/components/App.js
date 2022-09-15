import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
// import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import MuseumPage from './views/MuseumPage/MuseumPage.js';
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
      return <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)', background: '#282828' }}></div>
    }
  }

  
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
        <div>
          {design()}
        <Switch>
          <Route exact path="/" component={(LandingPage)} />
          <Route exact path="/museum" component={(MuseumPage)} />
          <Route exact path="/about" component={(AboutPage)} />
          <Route exact path="/admin" component={(AdminPage)} />
          <Route exact path="/admin/upload" component={(UploadPage)} />
        </Switch>
        </div>
      <Footer />
    </Suspense>
  );
}

export default App;
