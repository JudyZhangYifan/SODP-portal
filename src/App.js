import React, { Component } from 'react';
import { Switch, HashRouter, Route, BrowserRouter } from "react-router-dom";
import { Helmet } from 'react-helmet';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './stylesheets/app.module.css'
import NavBar from './components/Navbar.js';
import Home from './components/Home.js';
import Datasets from './components/Datasets.js';
import DatasetDetails from './components/DatasetDetails.js';
import LehighIcon from './images/LehighU_icon.png';

function App() {
  return (
    <div className={styles.flexWrapper}>
      <Helmet>
        <title>SODP Lehigh Data Portal</title>
        <meta property="og:title" content="SODP Lehigh Data Portal"/>
        <meta property="og:description" content="A SODP project building an open data portal for Lehigh!"/>
        <meta property="og:image" content={LehighIcon}/>
        {/* <meta property="og:url" content="https://stanfordopendata.org/"/> */}
        <link rel="icon" type="image/png" href="LehighIcon" />
      </Helmet>

      <div className={styles.wrapper}>
          <HashRouter>
            <div className={styles.navwrapper}>
              <NavBar />
            </div>

            <div>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/Datasets' component={Datasets} />
                <Route path='/Datasets/:name' component={DatasetDetails} />
                {/* <Route exact path='/aboutus' component={AboutUs} />
                <Route path="*" component={NotFound} /> */}
              </Switch>
            </div>
          </HashRouter>
        
      </div>

      <footer>
        <div className={styles.footer}>
          Source code on <a href="https://github.com/JudyZhangYifan/SODP-portal" className={styles.footerLink}> GitHub </a> &ensp;&#x2219;&ensp;
          Inspired by <a href="https://github.com/StanfordOpenData/open-data-portal" className={styles.footerLink}> Stanford Open Data Portal</a> &ensp;&#x2219;&ensp;
          Icons made by <a href="https://www.freepik.com" title="Freepik" className={styles.footerLink}>Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" className={styles.footerLink}>Flaticon</a> &ensp;&#x2219;&ensp;
          Hosted on <a href="https://sodp-lehigh-portal.herokuapp.com/" className={styles.footerLink}>Heroku</a>
        </div>
      </footer>

    </div>
  );
}

export default App;
