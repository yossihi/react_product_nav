import React, { useContext, useState } from "react";
import { checkUser } from "./data";
import MyContext from "./MyContext";

const Login = () => {
  const [newUsername, setnewUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setloggedIn] = useState(false);
  const { setUsername } = useContext(MyContext);

  const handleLogin = (e) => {
    e.preventDefault();
    if (checkUser(newUsername, password)) {
      setloggedIn(true);
      setUsername(newUsername);
    }
    console.log(loggedIn);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-md-center">
        <div className="col-xs-12 col-md-6">
          <h2 className="text-center">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={newUsername}
                onChange={(e) => setnewUsername(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
