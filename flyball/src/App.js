import React from "react";
import './App.css';
// import Home from './components/pages/Home';
import Home2 from './components/pages/Home2';

import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { render } from '@testing-library/react';



function App() {

  return (
    <div>
      <Router>
        <div>
          <Route exact path="/">
            {/* <Home/> */}
            <Home2/>
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
