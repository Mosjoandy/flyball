import React from "react";
import "./App.css";

import Nav from "./components/pages/Nav.js";
import TopPanel from "./components/pages/TopPanel.js";
import WhatPanel from "./components/pages/WhatPanel.js";
import AboutUsPanel from "./components/pages/AboutUsPanel.js";
import ScheduleTitle from "./components/pages/ScheduleTitle.js";
import SchedulePanel from "./components/pages/SchedulePanel.js";
// import CompetitionPanel from "./components/pages/CompetitionPanel.js";
import Contact from "./components/pages/Contact";
import TheTeam from "./components/pages/TheTeam";
// import * as Page from './components/pages';

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { render } from '@testing-library/react';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Route exact path="/">
            <Nav />
            <TopPanel />
            <WhatPanel />
            <AboutUsPanel />
            <ScheduleTitle />
            <SchedulePanel />
            {/* <CompetitionPanel /> */}
            <TheTeam />
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
