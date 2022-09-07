import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"

//admin page
import AdminPage from './views/AdminPage/AdminPage';
import UploadPage from './views/AdminPage/UploadPage/UploadPage'

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  if (LandingPage) {
    return (
      <Suspense fallback={(<div>Loading...</div>)}>
          <Switch>
            <Route exact path="/" component={Auth(LandingPage, null)} />
          </Switch>
    </Suspense>
    )
  }
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/admin" component={Auth(AdminPage, null)} />
          <Route exact path="/admin/upload" component={Auth(UploadPage, null)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
