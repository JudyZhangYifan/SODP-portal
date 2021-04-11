import React, { Component } from 'react';
import { Switch, HashRouter, Route, BrowserRouter } from "react-router-dom";
import { Helmet } from 'react-helmet';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './stylesheets/app.module.css'
import NavBar from './components/Navbar.js';
import Home from './components/Home.js';
import Datasets from './components/Datasets.js';
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
        {/* <link rel="icon" href="/favicon.ico" /> */}
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
                {/* <Route path='/datasets/:name' component={DatasetDetails} />
                <Route exact path='/aboutus' component={AboutUs} />
                <Route path="*" component={NotFound} /> */}
              </Switch>
            </div>
          </HashRouter>
    

        {/* <img src={'/images/idea.png'} />
        <img src={'/images/honesty.png'} />
        <img src={'/images/transparency.png'} /> */}
        
      </div>

      <footer>
        <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">Flaticon</a></div>
      </footer>

      {/* <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style> */}
    </div>
  );
}

export default App;
