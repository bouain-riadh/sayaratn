import React, { useState } from 'react';
import axios from "axios";
import "../login.css"


function Login(props) {


  const [emailReg, setEmailReg] = useState("zfv@dd.dcom");
  const [passwordReg, setPasswordReg] = useState("azkp,oidvihzbi");

  const [email, setEmail] = useState("zfv@dd.dcom");
  const [password, setPassword] = useState("azkp,oidvihzbi");

  const [loginStatus, setLoginStatus] = useState("");

  const register = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/user/signup", { email: emailReg, password: passwordReg, });
      props.toggleIsConnected(true);
    } catch (error) {
      console.error(error);
    }
  };

  const login = () => {
    axios.post("http://localhost:5000/user/signin", {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message)
      } else {

        setLoginStatus(response.data[0].email)

      }
      console.log(response)
    });

  };


  return (

    <div classNamed="Login" id="Login">

      <div className="ScriptTop">


        <section>

          <div className="rt-container">
            <div className="col-rt-12">
              <div className="Scriptcontent">
                {/* Login Form Popup HTML */}
                <center>
                  <label className="modal-btn" htmlFor="modal-toggle">
                    <span className="Logincolor"> Login</span><span className="Signupcolor">/Signup</span>
                  </label>
                </center>
                <input id="modal-toggle" type="checkbox" />
                <label className="modal-backdrop" htmlFor="modal-toggle" />
                <div className="modal-content">
                  <label className="modal-close-btn" htmlFor="modal-toggle">
                    <svg width={30} height={30}>
                      <line x1={5} y1={5} x2={20} y2={20} />
                      <line x1={20} y1={5} x2={5} y2={20} />
                    </svg>
                  </label>
                  <div className="tabs">
                    {/*  LOG IN  */}
                    <input
                      className="radio"
                      id="tab-1"
                      name="tabs-name"
                      type="radio"
                      defaultChecked
                    />
                    <label htmlFor="tab-1" className="table">
                      <span className="tabLogincolor">Login</span>
                    </label>
                    <div className="tabs-content">
                      <div className="login_socnet">
                        <a href className="fa fa-vk" aria-hidden="true" />
                        <a href className="fa fa-google-plus" aria-hidden="true" />
                        <a href className="fa fa-facebook" aria-hidden="true" />
                      </div>

                      <form action>
                        <input type="email" placeholder="Email" value="zfv@dd.dcom"
                          onChange={(e) => { setEmail(e.target.value); }} />

                        <input type="password" placeholder="Password" value="zfv@dd.dcom"
                          onChange={(e) => { setPassword(e.target.value); }} />
                        <button className="buttonlogin" onClick={login}> Login </button>

                      </form>


                    </div>
                    {/*  SIGN UP  */}
                    <input
                      className="radio"
                      id="tab-2"
                      name="tabs-name"
                      type="radio"
                    />
                    <label htmlFor="tab-2" className="table">
                      <span className="tabSignupcolor">Sign up</span>
                    </label>
                    <div className="tabs-content">
                      <div className="login_socnet">
                        <a href className="fa fa-vk" aria-hidden="true" />
                        <a href className="fa fa-google-plus" aria-hidden="true" />
                        <a href className="fa fa-facebook" aria-hidden="true" />
                      </div>







                      <form action>
                        <input type="email" placeholder="Email" required value="zfv@dd.dcom"
                          onChange={(e) => { setEmailReg(e.target.value); }} />
                        <input type="password" placeholder="Password" required value="azkp,oidvihzbi"
                          onChange={(e) => { setPasswordReg(e.target.value); }} />


                        <button className="buttonlogin" onClick={register}>signup</button>
                      </form>















                      <h1>{loginStatus}</h1>
                    </div>
                  </div>
                </div>
                {/* partial */}
              </div>
            </div>
          </div>
        </section>
        {/* Analytics */}


      </div>

    </div>
  )
}

export default Login;