// import React from "react";
// function Login(params) {
//   return (
//     <div className="login-page">
//       <div className="login-container">
//         <form>
//           <h1 className="login-title"> login</h1>
//           <div class="form-group">
//             <label for="exampleInputEmail1">Email address</label>
//             <input
//               type="email"
//               class="form-control"
//               id="exampleInputEmail1"
//               aria-describedby="emailHelp"
//               placeholder="Enter email"
//             />
//           </div>
//           <div class="form-group">
//             <label for="exampleInputPassword1">Password</label>
//             <input
//               type="password"
//               class="form-control"
//               id="exampleInputPassword1"
//               placeholder="Password"
//             />
//           </div>
//           <button type="submit" class="btn btn-primary">
//                Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
// export default Login;

//------------------------------------------------//

import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-page">
      <div className="login-container">
        <form>
          <h1 className="login-title">Login</h1>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <Link to="/Home"> {/* Link to the Home page */}
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
