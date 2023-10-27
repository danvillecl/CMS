import '../App.css';
import Main from './Main';
// import Login from './Login';

function App() {
  return (
    <div className='App'>
      <Main />
      {/* <Login/> */}
    </div>
  );
}

export default App;

//------------------------------//
// import '../App.css';
// import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Home from "./Home"; // Import your Home component
// import Login from "./Login"; // Import your Login component

// function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/login">Login</Link>
//             </li>
//           </ul>
//         </nav>

//         <Route path="/" exact component={Home} />
//         <Route path="/login" component={Login} />
//       </div>
//     </Router>
//   );
// }

// export default App;
