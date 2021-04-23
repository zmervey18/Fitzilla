import React from "react";

const Login = () => {
  return (
    <section>
      <h1>Login Page</h1>

      <form>
        <div>
          <label>
            Username
            <input type="text" name="Username" placeholder="username"></input>
          </label>
        </div>
        <div>
          <label>
            Password
            <input type="text" name="Password" placeholder="password"></input>
          </label>
        </div>
        <div>
          <input type="submit" value="Login"></input>
        </div>
      </form>
    </section>
  );
};

export default Login;
