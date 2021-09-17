import React from "react";
import './App.css';
// import Home from './components/pages/Home';
// import Home2 from './components/pages/Home2';
import TopPanel from './components/pages/TopPanel.js'
import WhatPanel from './components/pages/WhatPanel.js'
import AboutUsPanel from './components/pages/AboutUsPanel.js'
import SchedulePanel from './components/pages/SchedulePanel.js'
import CompetitionPanel from './components/pages/CompetitionPanel.js'

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { render } from '@testing-library/react';



function App() {

  return (
    <div>
      <Router>
        <div>
          <Route exact path="/">
            {/* <Home/> */}
            {/* <Home2/> */}
            <TopPanel />
            <WhatPanel />
            <AboutUsPanel />
            <SchedulePanel />
            <CompetitionPanel />
          </Route>
        </div>
      </Router>
    </div>
  );
};




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
