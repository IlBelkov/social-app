import React from "react";
import c from "./Login.module.scss";

function Login(props) {

  return (
    <div className={c.login}>
      <h1>Login</h1>
      <form>
        <div>
          <input placeholder={'Login'}/>
        </div>
        <div>
          <input placeholder={'Password'}/>
        </div>
        <div>
          <input type={'checkbox'}/> Remember me
        </div>
        <button>Login</button>
      </form>
    </div>

  );
}

export default Login;
