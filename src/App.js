import React, { useState } from "react";
import "./App.css";

import Nav from "./components/pages/Nav.js";
import TopPanel from "./components/pages/TopPanel.js";
import WhatPanel from "./components/pages/WhatPanel.js";
import AboutUsPanel from "./components/pages/AboutUsPanel.js";
import ScheduleTitle from "./components/pages/ScheduleTitle.js";
import SchedulePanel from "./components/pages/SchedulePanel.js";
import LoadPage from "./components/pages/LoadPage";
// import CompetitionPanel from "./components/pages/CompetitionPanel.js";
import Sponsors from "./components/pages/Sponsors.js";
import Contact from "./components/pages/Contact";
import TheTeam from "./components/pages/TheTeam";
// import * as Page from './components/pages';

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { render } from '@testing-library/react';

function App() {
const [isLoaded , setIsLoaded] = useState(false);



  return (
    <div>
       {!isLoaded ? <LoadPage className='loadingImage' /> : null }
      <Router>

     
        <div className={!isLoaded ? 'displayNone' : null}>
          <Route exact path="/">
            <Nav />
            <TopPanel />
            <AboutUsPanel  setIsLoaded={setIsLoaded}/>
            <ScheduleTitle />
            <SchedulePanel />
            <WhatPanel />
            <TheTeam />
            <Sponsors />
            <Contact />
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;

// class App extends Component {
//   constructor() {
//     super()
//     render(); {
//       return (
//         <div>
//           <Router>
//             <div>
//               <Route exact path="/">
//                 <Home />
//               </Route>
//             </div>
//           </Router>
//         </div>
//       );
//     };
//   };
// };
